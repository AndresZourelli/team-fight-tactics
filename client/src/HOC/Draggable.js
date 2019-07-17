import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Draggable = (WrappedComponent) => {
	return class extends Component {
		drag = (e) => {
			console.log(e);
			e.dataTransfer.setData('transfer', e.target.id);
		};

		noAllowDrop = (e) => {
			e.stopPropagation();
		};
		render() {
			return (
				<WrappedComponent
					id={this.props.id}
					draggable
					onDragStart={this.drag}
					onDragOver={this.noAllowDrop}
					{...this.props}>
					{this.props.children}
				</WrappedComponent>
			);
		}
	};
};
Draggable.PropTypes = {
	id: PropTypes.string,
	children: PropTypes.node
};
export default Draggable;

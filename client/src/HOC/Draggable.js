import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Draggable = (WrappedComponent) => {
	return class extends Component {
		drag = (e) => {
			console.log('Drag', e);
			e.dataTransfer.setData('transfer', e.target.id);
			e.dataTransfer.effectAllowed = 'copy';
		};

		noAllowDrop = (e) => {
			e.stopPropagation();
		};
		render() {
			return (
				<WrappedComponent
					draggable
					onDragStart={this.drag}
					onDragOver={this.noAllowDrop}
					{...this.props}
					hi="hi">
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

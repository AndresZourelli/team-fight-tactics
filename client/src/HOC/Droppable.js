import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Droppable = (WrappedComponent) => {
	return class extends Component {
		drop = (e) => {
			e.preventDefault();
			const data = e.dataTransfer.getData('transfer');
			e.target.appendChild(document.getElementById(data));
		};

		allowDrop = (e) => {
			e.preventDefault();
		};
		render() {
			return (
				<WrappedComponent id={this.props.id} onDrop={this.drop} onDragOver={this.allowDrop}>
					{this.props.children}
				</WrappedComponent>
			);
		}
	};
};

Droppable.PropTypes = {
	id: PropTypes.string,
	children: PropTypes.node
};

export default Droppable;

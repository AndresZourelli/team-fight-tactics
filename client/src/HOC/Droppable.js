import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Droppable = (WrappedComponent) => {
	return class extends Component {
		drop = (e) => {
			e.preventDefault();
			console.log('Drop', e.target);
			const data = e.dataTransfer.getData('transfer');
			console.log(data);
			var nodeCopy = document.getElementById(data).cloneNode(true);
			nodeCopy.id = 'newID';
			console.log(nodeCopy);
			e.target.appendChild(nodeCopy);
		};

		allowDrop = (e) => {
			e.preventDefault();
		};
		render() {
			return (
				<WrappedComponent
					id={this.props.character ? this.props.character.name : null}
					onDrop={this.drop}
					onDragOver={this.allowDrop}
					{...this.props}>
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

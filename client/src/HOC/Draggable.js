import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addToDroppedList } from '../ReduxContainer/actions/actions';
const Draggable = (WrappedComponent) => {
	class HOCComponent extends Component {
		drag = (e) => {
			console.log('Drag', e);
			e.dataTransfer.setData('transfer', e.target.id);
			e.dataTransfer.effectAllowed = 'copy';
		};
		dragEnd = (e) => {
			console.log(e.currentTarget);
			this.props.addnewcharactertodrop(this.props.character);
			const data = e.dataTransfer.getData('transfer');
			if (document.getElementById(data) === null) {
				e.dataTransfer.setData('transfer', e.target.id);
				e.dataTransfer.effectAllowed = 'copy';
			}
		};

		noAllowDrop = (e) => {
			e.stopPropagation();
		};
		render() {
			console.log(this.props);
			return (
				<WrappedComponent
					draggable
					onDragStart={this.drag}
					onDragOver={this.noAllowDrop}
					onDragEnd={this.dragEnd}
					character={this.props.character}
					hi="hi">
					{this.props.children}
				</WrappedComponent>
			);
		}
	}
	const mapDispatchToProps = (dispatch) => {
		return {
			addnewcharactertodrop: (newCharacter) => {
				dispatch(addToDroppedList(newCharacter));
			}
		};
	};

	return connect(null, mapDispatchToProps)(HOCComponent);
};
Draggable.PropTypes = {
	id: PropTypes.string,
	children: PropTypes.node
};

export default Draggable;

// const Draggable = (WrappedComponent) => {
// 	return class extends Component {
// 		drag = (e) => {
// 			console.log('Drag', e);
// 			e.dataTransfer.setData('transfer', e.target.id);
// 			e.dataTransfer.effectAllowed = 'copy';
// 		};
// 		dragEnd = (e) => {
// 			const data = e.dataTransfer.getData('transfer');
// 			if (document.getElementById(data) === null) {
// 				console.log('Drag', e);
// 				e.dataTransfer.setData('transfer', e.target.id);
// 				e.dataTransfer.effectAllowed = 'copy';
// 			}
// 		};

// 		noAllowDrop = (e) => {
// 			e.stopPropagation();
// 		};
// 		render() {
// 			return (
// 				<WrappedComponent
// 					draggable
// 					onDragStart={this.drag}
// 					onDragOver={this.noAllowDrop}
// 					onDragEnd={this.dragEnd}
// 					{...this.props}
// 					hi="hi">
// 					{this.props.children}
// 				</WrappedComponent>
// 			);
// 		}
// 	};
// };
// Draggable.PropTypes = {
// 	id: PropTypes.string,
// 	children: PropTypes.node
// };
// export default Draggable;

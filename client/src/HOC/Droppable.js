import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToDroppedList } from '../ReduxContainer/actions/actions';
const Droppable = (WrappedComponent) => {
	class HOCdrop extends Component {
		drop = (e) => {
			const data = e.dataTransfer.getData('transfer');
			this.props.addnewcharactertodrop(data);
			e.preventDefault();
		};

		allowDrop = (e) => {
			e.preventDefault();
		};
		render() {
			console.log(this.props);
			const charactersList = this.props.dropArray.map((character, index) => {
				let array = this.props.listCharacters;
				for (const item of array) {
					if (item.name === character) {
						let assign_color;
						if (item.tier === 1) {
							assign_color = 'grey';
						} else if (item.tier === 2) {
							assign_color = '#cd7f32';
						} else if (item.tier === 3) {
							assign_color = 'green';
						} else if (item.tier === 4) {
							assign_color = 'purple';
						} else if (item.tier === 5) {
							assign_color = 'gold';
						}
						let v = (
							<div
								key={index + character}
								draggable
								style={{ backgroundColor: assign_color, cursor: 'move' }}>
								{character}
							</div>
						);
						return v;
					}
				}
			});
			return (
				<WrappedComponent
					id={this.props.character ? this.props.character.name : null}
					onDrop={this.drop}
					onDragOver={this.allowDrop}
					{...this.props}>
					{this.props.children}
					{charactersList}
				</WrappedComponent>
			);
		}
	}
	const mapStateToProps = (state) => ({
		dropArray: state.dragAndDrop.dropLocation,
		listCharacters: state.characterData.characters
	});
	const mapDispatchToProps = (dispatch) => {
		return {
			addnewcharactertodrop: (newCharacter) => {
				dispatch(addToDroppedList(newCharacter));
			}
		};
	};

	return connect(mapStateToProps, mapDispatchToProps)(HOCdrop);
};

Droppable.PropTypes = {
	id: PropTypes.string,
	children: PropTypes.node
};

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		addnewcharactertodrop: (newCharacter) => {
// 			dispatch(addToDroppedList(newCharacter));
// 		}
// 	};
// };

export default Droppable;

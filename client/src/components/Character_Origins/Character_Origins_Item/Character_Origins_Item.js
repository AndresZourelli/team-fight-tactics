import React from 'react';
import Draggable from '../../../HOC/Draggable';
import './Character_Origins_Item.scss';
const CharacterOriginsItem = (props) => {
	let assign_color;
	if (props.character.tier === 1) {
		assign_color = 'grey';
	} else if (props.character.tier === 2) {
		assign_color = '#cd7f32';
	} else if (props.character.tier === 3) {
		assign_color = 'green';
	} else if (props.character.tier === 4) {
		assign_color = 'purple';
	} else if (props.character.tier === 5) {
		assign_color = 'gold';
	}
	return (
		<div className="Drag_item" {...props} style={{ backgroundColor: assign_color }}>
			{props.character.name}
		</div>
	);
};

export default Draggable(CharacterOriginsItem);

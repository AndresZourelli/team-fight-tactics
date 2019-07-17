import React from 'react';
import Draggable from '../../../HOC/Draggable';
import './Character_Origins_Item.scss';
const CharacterOriginsItem = (props) => {
	return (
		<div className="Drag_item" {...props}>
			{props.character.name}
		</div>
	);
};

export default Draggable(CharacterOriginsItem);

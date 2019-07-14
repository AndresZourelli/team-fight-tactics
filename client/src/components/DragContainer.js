import React from 'react';
import './DragContainer.css';
import Draggable from '../HOC/Draggable';
const DragContainer = (props) => {
	return (
		<div className="DragObj" id={props.id} {...props}>
			{props.children}
		</div>
	);
};

export default Draggable(DragContainer);

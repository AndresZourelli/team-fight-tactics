import React from 'react';
import './DropContainer.css';
import Droppable from '../HOC/Droppable';
const DropContainer = (props) => {
	return (
		<div className="Dropzone" {...props}>
			{props.children}
		</div>
	);
};

export default Droppable(DropContainer);

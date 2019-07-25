import React from 'react';
import Droppable from '../../HOC/Droppable';

const TeamBuild = (props) => {
	return (
		<div {...props} id="drop_zone" className="w-100 h-100">
			Drop Here
		</div>
	);
};

export default Droppable(TeamBuild);

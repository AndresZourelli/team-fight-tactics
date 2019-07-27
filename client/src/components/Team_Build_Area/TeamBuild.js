import React from 'react';
import Droppable from '../../HOC/Droppable';
import { compose } from 'redux';
import { connect } from 'react-redux';
const TeamBuild = (props) => {
	return (
		<div
			character={props.character}
			id="drop_zone"
			onDrop={props.onDrop}
			onDragOver={props.onDragOver}
			className="w-100 h-100"
		>{props.children}</div>
	);
};

const mapStateToProps = (state) => ({
	DropZoneCharacters: state.dragAndDrop.dropLocation
});

const composedTeamBuild = compose(Droppable, connect(mapStateToProps))(TeamBuild);

export default composedTeamBuild;

import React from 'react';
import { connect } from 'react-redux';
import './CharacterOrigins.scss';
import CharacterOriginsItem from './Character_Origins_Item/Character_Origins_Item';
const CharacterOrigins = (props) => {
	let titles = Object.keys(props.classes).map((x) => {
		let indv_data = props.classes[x].map((char) => {
			return <CharacterOriginsItem character={char} key={char.name} {...props} />;
		});
		return (
			<div className="class_item" key={x}>
				<h1>{capitalizeFirstLetter(x)}</h1>
				{indv_data}
			</div>
		);
	});
	return <div className="Classes_contianer">{titles}</div>;
};

const mapStateToProps = (state) => ({
	origins: state.characterData.origins,
	classes: state.characterData.classes,
	characters: state.characterData.characters
});

export default connect(mapStateToProps)(CharacterOrigins);

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

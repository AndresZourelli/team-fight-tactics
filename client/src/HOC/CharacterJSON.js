import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListChar from '../JSON Data/Characters.json';

const CharacterJSON = (WrappedComponent) => {
	return class extends Component {
		constructor(props) {
			super(props);
			this.state = {};
		}
		componentDidMount() {
			this.setState(extract_groups());
		}
		render() {
			return <WrappedComponent characters={this.state}>{this.props.children}</WrappedComponent>;
		}
	};
};
// Draggable.PropTypes = {
// 	id: PropTypes.string,
// 	children: PropTypes.node
// };
export default CharacterJSON;

function extract_groups() {
	console.log('Hi');
	let demon = [];
	let dragon = [];
	let exile = [];
	let glacial = [];
	let robot = [];
	let imperial = [];
	let noble = [];
	let ninja = [];
	let pirate = [];
	let phantom = [];
	let wild = [];
	let voids = [];
	let yordle = [];

	for (let i = 0; i < ListChar.characters.length; i++) {
		let index = ListChar.characters[i];

		if (index.origins.includes('Demon')) {
			demon.push(index.name);
		}
		if (index.origins.includes('Dragon')) {
			dragon.push(index.name);
		}
		if (index.origins.includes('Exile')) {
			exile.push(index.name);
		}
		if (index.origins.includes('Glacial')) {
			glacial.push(index.name);
		}
		if (index.origins.includes('Robot')) {
			robot.push(index.name);
		}
		if (index.origins.includes('Imperial')) {
			imperial.push(index.name);
		}
		if (index.origins.includes('Noble')) {
			noble.push(index.name);
		}
		if (index.origins.includes('Ninja')) {
			ninja.push(index.name);
		}
		if (index.origins.includes('Pirate')) {
			pirate.push(index.name);
		}
		if (index.origins.includes('Phantom')) {
			phantom.push(index.name);
		}
		if (index.origins.includes('Wild')) {
			wild.push(index.name);
		}
		if (index.origins.includes('Void')) {
			voids.push(index.name);
		}
		if (index.origins.includes('Yordle')) {
			yordle.push(index.name);
		}
	}

	let finished_char_obj = {
		demon: demon,
		dragon: dragon,
		exile: exile,
		glacial: glacial,
		robot: robot,
		imperial: imperial,
		noble: noble,
		ninja: ninja,
		pirate: pirate,
		phantom: phantom,
		wild: wild,
		voids: voids,
		yordle: yordle
	};

	return finished_char_obj;
}

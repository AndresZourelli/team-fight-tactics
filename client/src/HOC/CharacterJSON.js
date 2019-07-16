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
	let assassin = [];
	let blademaster = [];
	let brawler = [];
	let elementalist = [];
	let guardian = [];
	let gunslinger = [];
	let knight = [];
	let ranger = [];
	let shapeshifter = [];
	let sorcerer = [];
	console.log(ListChar.characters.length);
	for (let i = 0; i < ListChar.characters.length; i++) {
		let index = ListChar.characters[i];

		if (index.class.includes('Assassin')) {
			console.log('object');
			assassin.push(index.name);
		}
		if (index.class.includes('Blademaster')) {
			blademaster.push(index.name);
		}
		if (index.class.includes('Brawler')) {
			brawler.push(index.name);
		}
		if (index.class.includes('Elementalist')) {
			elementalist.push(index.name);
		}
		if (index.class.includes('Guardian')) {
			guardian.push(index.name);
		}
		if (index.class.includes('Gunslinger')) {
			gunslinger.push(index.name);
		}
		if (index.class.includes('Knight')) {
			knight.push(index.name);
		}
		if (index.class.includes('Ranger')) {
			ranger.push(index.name);
		}
		if (index.class.includes('Shapeshifter')) {
			shapeshifter.push(index.name);
		}
		if (index.class.includes('Sorcerer')) {
			sorcerer.push(index.name);
		}
	}

	let finished_char_obj = {
		assassin: assassin,
		blademaster: blademaster,
		brawler: brawler,
		elementalist: elementalist,
		guardian: guardian,
		gunslinger: gunslinger,
		knight: knight,
		ranger: ranger,
		shapeshifter: shapeshifter,
		sorcerer: sorcerer
	};

	return finished_char_obj;
}

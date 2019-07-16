import { CHARACTERS, CLASSES, ORIGINS } from './types';
import ListChar from '../../JSON Data/Characters.json';

export const getCharacters = () => (dispatch) => {
	dispatch({
		type: CHARACTERS,
		payload: ListChar.characters
	});
	dispatch({
		type: CLASSES,
		payload: extract_classes()
	});
	dispatch({
		type: ORIGINS,
		payload: extract_origins()
	});
};

function extract_classes() {
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
	for (let i = 0; i < ListChar.characters.length; i++) {
		let index = ListChar.characters[i];

		if (index.class.includes('Assassin')) {
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

function extract_origins() {
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
	let organize_origins = {
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
		void: voids,
		yordle: yordle
	};
	return organize_origins;
}

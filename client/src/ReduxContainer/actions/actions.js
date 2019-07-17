import { CHARACTERS, CLASSES, ORIGINS } from './types';
import ListChar from '../../JSON Data/Characters.json';

export const getCharacters = () => (dispatch) => {
	dispatch({
		type: CHARACTERS,
		payload: ListChar.characters.sort(sort_by_level)
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
			assassin.push(index);
		}
		if (index.class.includes('Blademaster')) {
			blademaster.push(index);
		}
		if (index.class.includes('Brawler')) {
			brawler.push(index);
		}
		if (index.class.includes('Elementalist')) {
			elementalist.push(index);
		}
		if (index.class.includes('Guardian')) {
			guardian.push(index);
		}
		if (index.class.includes('Gunslinger')) {
			gunslinger.push(index);
		}
		if (index.class.includes('Knight')) {
			knight.push(index);
		}
		if (index.class.includes('Ranger')) {
			ranger.push(index);
		}
		if (index.class.includes('Shapeshifter')) {
			shapeshifter.push(index);
		}
		if (index.class.includes('Sorcerer')) {
			sorcerer.push(index);
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
			demon.push(index);
		}
		if (index.origins.includes('Dragon')) {
			dragon.push(index);
		}
		if (index.origins.includes('Exile')) {
			exile.push(index);
		}
		if (index.origins.includes('Glacial')) {
			glacial.push(index);
		}
		if (index.origins.includes('Robot')) {
			robot.push(index);
		}
		if (index.origins.includes('Imperial')) {
			imperial.push(index);
		}
		if (index.origins.includes('Noble')) {
			noble.push(index);
		}
		if (index.origins.includes('Ninja')) {
			ninja.push(index);
		}
		if (index.origins.includes('Pirate')) {
			pirate.push(index);
		}
		if (index.origins.includes('Phantom')) {
			phantom.push(index);
		}
		if (index.origins.includes('Wild')) {
			wild.push(index);
		}
		if (index.origins.includes('Void')) {
			voids.push(index);
		}
		if (index.origins.includes('Yordle')) {
			yordle.push(index);
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

function sort_by_level(a, b) {
	if (a.tier >= b.teir) return 1;
	if (b.tier > a.tier) return -1;
}

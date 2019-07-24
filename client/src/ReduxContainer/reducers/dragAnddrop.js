import {
	ASSASSIN,
	BLADEMASTER,
	BRAWLER,
	ELEMENTALIST,
	GUARDIAN,
	GUNSLINGER,
	KNIGHT,
	RANGER,
	SHAPESHIFTER,
	SORCERER,
	DROP_LOCATION
} from '../actions/types';

const initialState = {
	dropLocation: [],
	Assasin: [],
	Blademaster: [],
	Brawler: [],
	Elementalist: [],
	Guardian: [],
	Gunslinger: [],
	Knight: [],
	Ranger: [],
	Shapeshifter: [],
	Sorcerer: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case ASSASSIN:
			return {
				...state,
				Assasin: [ ...state.Assasin, action.payload ]
			};
		case BLADEMASTER:
			return {
				...state,
				Blademaster: [ ...state.Blademaster, action.payload ]
			};
		case BRAWLER:
			return {
				...state,
				Brawler: [ ...state.Brawler, action.payload ]
			};
		case ELEMENTALIST:
			return {
				...state,
				Elementalist: [ ...state.Elementalist, action.payload ]
			};
		case GUARDIAN:
			return {
				...state,
				Guardian: [ ...state.Guardian, action.payload ]
			};
		case GUNSLINGER:
			return {
				...state,
				Gunslinger: [ ...state.Gunslinger, action.payload ]
			};
		case KNIGHT:
			return {
				...state,
				Knight: [ ...state.Knight, action.payload ]
			};
		case RANGER:
			return {
				...state,
				Ranger: [ ...state.Ranger, action.payload ]
			};
		case SHAPESHIFTER:
			return {
				...state,
				Shapeshifter: [ ...state.Shapeshifter, action.payload ]
			};
		case SORCERER:
			return {
				...state,
				Sorcerer: [ ...state.Sorcerer, action.payload ]
			};

		case DROP_LOCATION:
			return {
				...state,
				dropLocation: [ ...state.dropLocation, action.payload ]
			};
		default:
			return state;
	}
}

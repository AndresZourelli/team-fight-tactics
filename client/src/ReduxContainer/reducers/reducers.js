import { CHARACTERS, CLASSES, ORIGINS } from '../actions/types';

const initialState = {
	characters: [],
	classes: {},
	origins: {}
};

export default function(state = initialState, action) {
	switch (action.type) {
		case CHARACTERS:
			return {
				...state,
				characters: action.payload
			};
		case CLASSES:
			return {
				...state,
				classes: action.payload
			};
		case ORIGINS:
			return {
				...state,
				origins: action.payload
			};

		default:
			return state;
	}
}

import { CHARACTERS } from '../actions/types';

const initialState = {
	flight_data: [],
	multi_city_data: [],
	form: {},
	photoData: {},
	loading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case CHARACTERS:
			return {
				...state,
				flight_data: action.payload,
				loading: false
			};

		default:
			return state;
	}
}

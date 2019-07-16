import { CHARACTERS } from './types';

export const getCharacters = () => (dispatch) => {
	dispatch({
		type: CHARACTERS,
		payload: 'Hi'
	});
};

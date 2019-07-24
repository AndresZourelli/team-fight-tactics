import { combineReducers } from 'redux';
import reducers from './reducers';
import dragAnddrop from './dragAnddrop';
export default combineReducers({
	characterData: reducers,
	dragAndDrop: dragAnddrop
});

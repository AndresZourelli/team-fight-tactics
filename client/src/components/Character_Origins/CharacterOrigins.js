import React from 'react';
import CharacterList from '../../HOC/CharacterJSON';
const CharacterOrigins = (props) => {
	return <div>{console.log(props)}</div>;
};

export default CharacterList(CharacterOrigins);

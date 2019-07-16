import React from 'react';
import './App.scss';
import DropContainer from './components/DropContainer';
import DragContainer from './components/DragContainer';
import CharacterJSON from './HOC/CharacterJSON';
function App(props) {
	console.log(props);
	return (
		<div className="App">
			<nav className="navbar navbar-dark bg-dark">
				<a className="navbar-brand" href="/">
					Team-Fight-Tactics
				</a>
			</nav>
			<div className="main-container">
				<div className="left-menu">Characters</div>
				<div className="main-menu">Team Build Area</div>
				<div className="right-menu">Item Area</div>
				<div className="bottom-menu">Team Comp Builder</div>
			</div>
		</div>
	);
}

export default CharacterJSON(App);

// working code
// <div className="App" style={{ display: 'flex' }}>
// 			<DropContainer id="col1">
// 				<DragContainer id="Bob">a</DragContainer>
// 				<DragContainer id="pop">b</DragContainer>
// 			</DropContainer>
// 			<DropContainer id="col2" />
// 	</div>

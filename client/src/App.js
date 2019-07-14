import React from 'react';
import './App.css';
import DropContainer from './components/DropContainer';
import DragContainer from './components/DragContainer';

function App() {
	return (
		<div className="App" style={{ display: 'flex' }}>
			<DropContainer id="col1">
				<DragContainer id="Bob">a</DragContainer>
				<DragContainer id="pop">b</DragContainer>
			</DropContainer>
			<DropContainer id="col2" />
		</div>
	);
}

export default App;

import React, { Component } from 'react';
import './App.scss';
import CharacterOrigins from './components/Character_Origins/CharacterOrigins';
import { getCharacters } from './ReduxContainer/actions/actions';
import { connect } from 'react-redux';
import TeamBuild from './components/Team_Build_Area/TeamBuild';
class App extends Component {
	componentDidMount() {
		this.props.getCharacters();
	}
	render() {
		return (
			<div className="App">
				<nav className="navbar navbar-dark bg-dark">
					<a className="navbar-brand" href="/">
						Team-Fight-Tactics
					</a>
				</nav>
				<div className="main-container">
					<div className="left-menu">Characters</div>
					<div className="main-menu">
						<TeamBuild />
					</div>
					<div className="right-menu">Item Area</div>
					<div className="bottom-menu">
						<CharacterOrigins />
					</div>
				</div>
			</div>
		);
	}
}

// const mapStateToProps = (state) => ({

// })

const mapDispatchToProps = (dispatch) => {
	return {
		getCharacters: () => {
			dispatch(getCharacters());
		}
	};
};

export default connect(null, mapDispatchToProps)(App);

// working code
// <div className="App" style={{ display: 'flex' }}>
// 			<DropContainer id="col1">
// 				<DragContainer id="Bob">a</DragContainer>
// 				<DragContainer id="pop">b</DragContainer>
// 			</DropContainer>
// 			<DropContainer id="col2" />
// 	</div>

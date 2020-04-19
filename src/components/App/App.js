import React, { Component } from 'react';
import './App.css';
import { hashRouter as Router, Route, Link } from 'react-router-dom';
import FeelingPage from '../Pages/FeelingPage/FeelingPage';
import UnderstandingPage from '../Pages/UnderstandingPage/UnderstandingPage';
import SupportPage from '../Pages/SupportPage/SupportPage';
import CommentPage from '../Pages/CommentPage/CommentPage';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<Router>
					<header className='App-header'>
						<h1 className='App-title'>Feedback!</h1>
						<h4>
							<i>Don't forget it!</i>
						</h4>
					</header>
					<br />
					<Route exact path='/' component={FeelingPage} />
					<Route exact path='/' component={UnderstandingPage} />
					<Route exact path='/' component={SupportPage} />
					<Route exact path='/' component={CommentPage} />
				</Router>
			</div>
		);
	}
}

export default App;

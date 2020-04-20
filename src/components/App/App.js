import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import FeelingPage from '../Pages/FeelingPage/FeelingPage';
import UnderstandingPage from '../Pages/UnderstandingPage/UnderstandingPage';
import SupportPage from '../Pages/SupportPage/SupportPage';
import CommentsPage from '../Pages/CommentsPage/CommentsPage';
import PreSubmitReviewPage from '../Pages/PreSubmitReviewPage/PreSubmitReviewPage';
import SubmissionSuccessPage from '../Pages/SubmissionSuccessPage/SubmissionSuccessPage';

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
					<Route exact path='/understanding' component={UnderstandingPage} />
					<Route exact path='/support' component={SupportPage} />
					<Route exact path='/comments' component={CommentsPage} />
					<Route exact path='/feedbackreview' component={PreSubmitReviewPage} />
					<Route
						exact
						path='/submissionsuccess'
						component={SubmissionSuccessPage}
					/>
				</Router>
			</div>
		);
	}
}

export default App;

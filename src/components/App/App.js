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
	state = [
		<div>
			<header className='App-header'>
				<h1 className='App-title'>Feedback!</h1>
				<h4>
					<i>Don't forget it!</i>
				</h4>
			</header>
			<br />
		</div>,
	];

	// viewCheck = (input) => (event) => {
	// 		if (
	// 			Router === `Route exact path='/feeling' component={FeelingPage}` ||
	// 			Router ===
	// 				`Route exact path='/understanding' component={UnderstandingPage}` ||
	// 			Router === `Route exact path='/support' component={SupportPage}` ||
	// 			Router === `Route exact path='/comments' component={CommentsPage}`
	// 		) {
	// 			this.setState = [
	// 					<div>
	// 						<header className='App-header'>
	// 							<h1 className='App-title'>Feedback!</h1>
	// 							<h4>
	// 								<i>Don't forget it!</i>
	// 							</h4>
	// 						</header>
	// 						<br />
	// 					</div>
	// 					]
	// 			}
	// 		}

	// 	if (
	// 		Router ===
	// 		`Route exact path='/feedbackreview' component={PreSubmitReviewPage}`
	// 	) {
	// 		this.setState = [
	// 			<div>
	// 				<header>
	// 					<h1 className='App-title'>Review Your Feedback</h1>
	// 				</header>
	// 				<br />
	// 			</div>,
	// 		]
	// 	}
	// }

	// 	if (
	// 		Router ===
	// 		`Route exact path='/feedbackreview' component={PreSubmitReviewPage}`
	// 	) {
	// 		this.setState = [
	// 			<div>
	// 				<header>
	// 					<h1 className='App-title'>Thank You!</h1>
	// 				</header>
	// 				<br />
	// 			</div>,
	// 		];
	// 	}

	render() {
		return (
			<div className='App'>
				<Router>
					{this.state}
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

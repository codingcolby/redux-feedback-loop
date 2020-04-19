import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class PreSubmitReviewPage extends Component {
	submitFeedback = (event) => {
		const feedback = {
			feeling: this.props.store.feelingReducer.feeling,
			understanding: this.props.store.understandingReducer.understanding,
			support: this.props.store.supportReducer.support,
			comments: this.props.store.commentsReducer.comments,
		};

		axios
			.post('/feedback', feedback)
			.then((response) => {
				console.log(response.data);
				this.props.history.push('/submissionsuccess');
			})
			.catch((err) => {
				console.warn(err);
			});
	};

	render() {
		return (
			<div>
				<h2>Review Your Feedback</h2>
				<ul>
					<li>Feeling: {this.props.feedbackReducer.feeling}</li>
					<li>Understanding: {this.props.feedbackReducer.understanding}</li>
					<li>Support: {this.props.feedbackReducer.support}</li>
					<li>Comments: {this.props.feedbackReducer.comments}</li>
				</ul>

				<button onClick={this.submitFeedback}>Submit Feedback</button>
			</div>
		);
	}
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(PreSubmitReviewPage);

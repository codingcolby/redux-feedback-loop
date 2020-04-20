import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class PreSubmitReviewPage extends Component {
	state = {
		reviewcomplete: 'reviewcomplete',
	};

	submitFeedback = (event) => {
		const feedback = {
			feeling: this.props.store.feelingReducer.feeling,
			understanding: this.props.store.understandingReducer.understanding,
			support: this.props.store.supportReducer.support,
			comments: this.props.store.commentsReducer.comments,
		};

		this.props.dispatch({ type: 'SET_REVIEW', payload: this.state });

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
				<p>Feeling: {this.props.store.feelingReducer.feeling}</p>
				<p>
					Understanding: {this.props.store.understandingReducer.understanding}
				</p>
				<p>Support: {this.props.store.supportReducer.support}</p>
				<p>Comments: {this.props.store.commentsReducer.comments}</p>

				<button onClick={this.submitFeedback}>Submit</button>
			</div>
		);
	}
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(PreSubmitReviewPage);

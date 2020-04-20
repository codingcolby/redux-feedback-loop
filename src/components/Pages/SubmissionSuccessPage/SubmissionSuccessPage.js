import React, { Component } from 'react';
import { connect } from 'react-redux';

class SubmissionSuccessPage extends Component {
	onNextClick = (event) => {
		this.props.dispatch({ type: 'SET-SUBMISSIONSUCCESS', payload: this.state });
		this.props.history.push('/submissionsuccess');
	};

	render() {
		console.log(this.props.store);

		return (
			<div>
				<h2>Thank you</h2>
				<p>Your feedback is important and has been successfully submitted</p>

				<p>
					Optional: we always welcome feedback, if you have more to say, use the
					button below
				</p>

				<button onClick={this.onNextClick}>Leave New Feedback</button>
			</div>
		);
	}
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(SubmissionSuccessPage);
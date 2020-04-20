import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Pages.css';

class SubmissionSuccessPage extends Component {
	state = {
		submitted: 'submitted',
	};

	onNextClick = (event) => {
		this.props.dispatch({ type: 'SET_SUCCESS', payload: this.state });
		this.props.history.push('/');
	};

	render() {
		console.log(this.props.store);

		return (
			<div>
				{/* <h2>Thank you</h2> */}
				<p>Your feedback is important and has been successfully submitted</p>

				<p>
					Optional: we always welcome feedback, if you have more to say, please
					use the button below
				</p>

				<button className='newfeedback-btn' onClick={this.onNextClick}>
					Leave New Feedback
				</button>
			</div>
		);
	}
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(SubmissionSuccessPage);

import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentsPage extends Component {
	state = {
		comments: '',
	};

	onInputChange = (input) => (event) => {
		this.setState(
			{
				[input]: event.target.value,
			},
			() => {
				console.log(this.state);
			}
		);
	};

	onNextClick = (event) => {
		this.props.dispatch({ type: 'SET-COMMENTS', payload: this.state });
		this.props.history.push('/feedbackreview');
	};

	render() {
		console.log(this.props.store);

		return (
			<div>
				<h2>Any comments you want to leave?</h2>
				<input
					type='text'
					onChange={this.onInputChange('comments')}
					placeholder='Please share - help us help you!'
				/>
				<button onClick={this.onNextClick}>Next</button>
			</div>
		);
	}
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(CommentsPage);

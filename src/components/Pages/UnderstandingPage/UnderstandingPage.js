import React, { Component } from 'react';
import { connect } from 'react-redux';

class UnderstandingPage extends Component {
	state = {
		currentunderstanding: {
			understanding: '',
		},
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
		this.props.dispatch({ type: 'SET_UNDERSTANDING', payload: this.state });
		this.props.history.push('/support');
	};

	render() {
		console.log(this.props.store);

		return (
			<div>
				<h2>How well are you understanding the content today?</h2>
				<p>
					Please select a value between 1-5
					<br /> 1 = not at all and 5 = I got this!
				</p>
				<input
					type='number'
					required
					onChange={this.onInputChange('understanding')}
					placeholder='Rank your understanding'
				/>
				<button onClick={this.onNextClick}>Next</button>
			</div>
		);
	}
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(UnderstandingPage);

import React, { Component } from 'react';
import { connect } from 'react-redux';

class FeelingPage extends Component {
	state = {
		feeling: '',
	};

	onInputChange = (input) => (event) => {
let input = [],

		if (isNaN(input) || input < 1 || input > 5) {
			text = "Rating not valid, please enter a number between 1 and 5";
		  } 
		  
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
		this.props.dispatch({ type: 'SET-FEELING', payload: this.state });
		this.props.history.push('/understanding');
	};

	render() {
		console.log(this.props.store);

		return (
			<div>
				<h2>How are you feeling today?</h2>
				<p>
					Please select a value between 1-5 with 1 = not so good and 5 =
					fantastic
				</p>
				<input
					type='number'
					required
					onChange={this.onInputChange('feeling')}
					placeholder='Rank your feeling'
				/>
				)}
				<button onClick={this.onNextClick}>Next</button>
			</div>
		);
	}
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(FeelingPage);

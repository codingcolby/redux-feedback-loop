import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Pages.css';

class FeelingPage extends Component {
	state = {
		feeling: '',
	};

	onInputChange = (input) => (event) => {
		this.setState(
			{
				[input]: parseInt(event.target.value),
			},
			() => {
				console.log(this.state);
			}
		);
	};

	onNextClick = (event) => {
		this.props.dispatch({ type: 'SET_FEELING', payload: this.state });
		this.props.history.push('/understanding');
	};

	render() {
		console.log(this.props.store);

		return (
			<div>
				<h2>How are you feeling today?</h2>
				<p>Please select a value between 1-5</p>
				<p className='App-scale'> 1 = not so good and 5 = fantastic</p>
				<input
					type='number'
					min='1'
					max='5'
					onChange={this.onInputChange('feeling')}
					placeholder='#'
				/>
				<button onClick={this.onNextClick}>Next</button>
			</div>
		);
	}
}
const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(FeelingPage);

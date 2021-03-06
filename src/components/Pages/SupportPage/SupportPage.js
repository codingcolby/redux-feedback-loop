import React, { Component } from 'react';
import { connect } from 'react-redux';

class SupportPage extends Component {
	state = {
		support: '',
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
		this.props.dispatch({ type: 'SET_SUPPORT', payload: this.state });
		this.props.history.push('/comments');
	};

	render() {
		console.log(this.props.store);

		return (
			<div>
				<h2>How well are you being supported?</h2>
				<p>Please select a value between 1-5</p>
				<p className='App-scale'>1 = not at all and 5 = You got me!</p>
				<input
					type='number'
					min='1'
					max='5'
					required
					onChange={this.onInputChange('support')}
					placeholder='#'
				/>
				<button onClick={this.onNextClick}>Next</button>
			</div>
		);
	}
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(SupportPage);

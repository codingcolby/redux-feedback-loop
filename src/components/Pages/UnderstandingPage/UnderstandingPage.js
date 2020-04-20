import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Pages.css';

class UnderstandingPage extends Component {
	state = {
		understanding: '',
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
		this.props.dispatch({ type: 'SET_UNDERSTANDING', payload: this.state });
		this.props.history.push('/support');
	};

	render() {
		console.log(this.props.store);

		return (
			<div>
				<h2>How well are you understanding the content today?</h2>
				<p>Please select a value between 1-5 </p>
				<p className='App-scale'> 1 = not at all and 5 = I got this!</p>
				<input
					type='number'
					min='1'
					max='5'
					onChange={this.onInputChange('understanding')}
					placeholder='#'
				/>
				<button onClick={this.onNextClick}>Next</button>
			</div>
		);
	}
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(UnderstandingPage);

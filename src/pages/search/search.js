import React, { Component } from 'react';

class Search extends Component {
	constructor(props){
		super(props);
		this.state = {
			value: ''
		}

		this.update = this.update.bind(this);
	}

	update(event){
		this.setState({
			value: event.target.value
		})
	}

	render() {
		const { value } = this.state;
		return (
			<div>
				<h2>Search</h2>
				<p>Im sure something goes here</p>
				<input type="text" onChange={this.update} value={value} />
				<input type="submit" value="Search" />
				<div className="results">
				</div>
			</div>
		)
	}
}

export default Search;

import React, { Component } from 'react';

import './search.css';

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
			<div className="search-page">
				<div className="search-container">
					<h2>Search</h2>
					<p className="search-text center-text">Im sure something goes here</p>
					<form className="search-formfield">
						<input className="searchfield-text" type="text" onChange={this.update} value={value} />
						<input className="searchfield-submit" type="submit" value="Search" />
					</form>
				</div>
				<div className="results">
				</div>
			</div>
		)
	}
}

export default Search;

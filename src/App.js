import React from 'react';
import './App.css';

import Navbar from './components/navbar/navbar';

import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
	render() {
		return (
			<div className="container-main">
				<Navbar />
			</div>
		)
	}
}

export default App;

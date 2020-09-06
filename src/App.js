import React from 'react';
import './App.css';

import Navbar from './components/navbar/navbar';

import About from './pages/about/about';

import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
	render() {
		return (
			<div className="container-main">
				<Navbar />

				<div className="content">
					<Switch>
						<Route exact path="/about" component={About} />
					</Switch>
				</div>
			</div>
		)
	}
}

export default App;

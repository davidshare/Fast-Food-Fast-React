import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import LandingPage from './landingPage/landingPage';
import '../styles/app.css'
import Aux from './hoc/aux';
import store from '../store/store';



class App extends Component {
    render(){
		return (
			<Provider store={store}>
				<Aux>
					<BrowserRouter>
						<Switch>
							<Route exact path='/' component={LandingPage}/>
						</Switch>
					</BrowserRouter>
				</Aux>
			</Provider>
		)
    }
}

export default App;

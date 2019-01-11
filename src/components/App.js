import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from './landingPage/landingPage';
import '../styles/app.css'
import Aux from './hoc/aux';



class App extends Component {
    render(){
		return <Aux>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={LandingPage}/>
				</Switch>
			</BrowserRouter>
        </Aux>
    }
}

export default App;

import React, { Component, Fragment } from 'react';

import LandingPage from './landingPage/landingPage';

import '../styles/app.css'
import Layout from './hoc/layout/layout';
import Aux from './hoc/aux';



class App extends Component {
    render(){
		return <Aux>
			<Layout>
				<LandingPage />
			</Layout>
        </Aux>
    }
}

export default App;

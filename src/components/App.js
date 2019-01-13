import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from './landingPage/landingPage';
import '../styles/app.css';
import Aux from './hoc/aux';

/**
 * @descrption The App class component for rendering the app
 */
class App extends Component {
/**
* @description - this method renders the JSX
* @returns {JSX} renders the jsx component
*/
  render() {
    return (
    <Aux>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        </Switch>
      </BrowserRouter>
    </Aux>
    );
  }
}

export default App;

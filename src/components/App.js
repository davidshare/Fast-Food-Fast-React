import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import LandingPage from './landingPage/landingPage';
import '../styles/app.css';
import Aux from './hoc/aux';
import store from '../store/store';
import Signup from './auth/Signup';

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
      <Provider store={store}>
        <Aux>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={LandingPage}/>
              <Route exact path='/signup' component={Signup}/>
            </Switch>
          </BrowserRouter>
        </Aux>
      </Provider>
    );
  }
}

export default App;

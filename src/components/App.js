import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';

import LandingPage from './landingPage/landingPage';
import '../styles/app.css';
import Aux from './hoc/aux';
import store from '../store/store';
import Signin from '../containers/authContainers/SigninContainer';
import Signup from '../containers/authContainers/signupContainer';
import ViewMenu from '../containers/menu/ViewMenuContainer';

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
        <ToastProvider>
        <Aux>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/signin' component={Signin}/>
            <Route exact path='/menu' component={ViewMenu}/>
          </Switch>
        </BrowserRouter>
      </Aux>
        </ToastProvider>
      </Provider>
    );
  }
}

export default App;

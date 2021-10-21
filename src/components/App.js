import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import Alerts from './layout/Alerts';
import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoute from './common/PrivateRoute';
import Dashboard from './courses/Dashboard';
import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';
import Courses from './courses/Courses';

import 'bootstrap/dist/css/bootstrap.min.css';

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: 'top center',
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment>
              <Header />
              <Alerts />
              
              <div className="container">
                <Switch>
                  <PrivateRoute exact path="/" component={Dashboard} />
                  <PrivateRoute exact path="/courses" component={Courses} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                 

                                  
                </Switch>
              </div>

          
            </Fragment>
          </Router>
        </AlertProvider>

        <div>
           <h2>Our Courses</h2>
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

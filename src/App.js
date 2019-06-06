import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from './login/login';
import Dashboard from './dashboard/dashboard';
import Home from './home/home';
import Test from './Pure/pure-component';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/home' component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/pure' component={Test} />
            <Redirect to='/' />
          </Switch>
        </BrowserRouter>

      </>
    )
  }
}



export default App;

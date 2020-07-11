import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/shared/Navbar';
import NoMatch from './components/shared/NoMatch';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Profile from './components/shared/Profile';
import { Container, } from "semantic-ui-react";

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Switch>
        <Route exact path='/' component={Home} />
        <ProtectedRoute exact path='/profile' component={Profile} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route component={NoMatch} />
      </Switch>
    </FetchUser>
  </>
)
export default App;

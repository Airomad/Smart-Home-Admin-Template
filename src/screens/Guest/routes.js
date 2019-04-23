import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import LoginScreen from './Login';

export default function GuestRoutes() {
  return (
    <Router>
      <Route path="/guest/login" component={LoginScreen} />
      <Route
        path="/guest"
        exact
        component={() => <Redirect to="/guest/login" />}
      />
    </Router>
  );
}

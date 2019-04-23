import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AdminScreen from './Admin';

export default function GuestRoutes() {
  return (
    <Router>
      <Route path="/admin" component={AdminScreen} />
    </Router>
  );
}

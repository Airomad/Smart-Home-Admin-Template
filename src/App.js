import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GuestRoutes from 'screens/Guest';
import UserRoutes from 'screens/User';

const App = () => (
  <Router>
    <Route path="/guest" component={GuestRoutes} />
    <Route path="/admin" component={UserRoutes} />
  </Router>
);

export default App;

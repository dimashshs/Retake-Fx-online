import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import User from './User';
import Admin from './Admin'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={User} />
        <Route exact path="/Admin" component={Admin} />
      </Switch>
    </Router>
  );
}

export default App;

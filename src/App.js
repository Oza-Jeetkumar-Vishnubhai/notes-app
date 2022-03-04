import './App.css';
import React from "react";
import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CreateNote from './Components/CreateNote';
import SavedNote from './Components/SavedNote';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/newnote">
            <CreateNote />
          </Route>
          <Route exact path="/savednote">
            <SavedNote />
          </Route>
          <Route exact path="/*">
            <p>Error page</p>
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;

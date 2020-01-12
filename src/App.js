import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink 
} from "react-router-dom";
import Home from './pages/Home/Home';
import Main from './pages/Main/Main';
import NoMatch from './pages/404';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <nav>
            <ul>
              <li><NavLink activeClassName="activeRoute" exact to="/">Home</NavLink ></li>
              <li><NavLink activeClassName="activeRoute" exact to="/main">Main</NavLink ></li>
            </ul>
          </nav>
        </header>
          <div className="main">
            <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route exact path="/main">
                  <Main/>
                </Route>
                <Route path="*">
                  <NoMatch />
                </Route>
            </Switch>
          </div>
      </Router>
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './pages/about/About';
import Theme from './pages/theme/Theme';

class App extends Component {
  render() {
    return (
      <Router >
        <div className="App">

          <nav>
              <ul>
                <Link to="/">Home</Link>
              </ul>
              <ul>
                <Link to="/theme">Theme</Link>
              </ul>
              <ul>
                <Link to="/about">About</Link>
              </ul>
          </nav>

          <Switch>
            <Route exact path="/">
              <h1>This is the index route</h1>
            </Route>
            <Route path="/theme" 
              component={(props) => <Theme {...props} />} >
            </Route>
            <Route path="/about" 
              component={(props) => <About { ...props } />} >
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

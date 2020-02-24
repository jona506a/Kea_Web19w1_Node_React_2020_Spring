import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './pages/about/About';
import Theme from './pages/theme/Theme';
import Form from './pages/form/Form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: undefined
    }
    this.onThemeChange = this.onThemeChange.bind(this);
  }

  onThemeChange(backgroundColor) {
    console.log("This is the color", backgroundColor);
    console.log(this);
    this.setState({ backgroundColor });
  }

  render() {
    const { backgroundColor } = this.state;

    return (
      <Router >
        <div className="App" style={{ backgroundColor }}>

          <nav>
              <ul>
                <Link to="/">Home</Link>
              </ul>
              <ul>
                <Link to="/form">Form</Link>
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
              component={(props) => <Theme {...props} handleThemeChange={this.onThemeChange} />} >
            </Route>
            <Route path="/about" 
              component={(props) => <About {...props} />} >
            </Route>
            <Route path="/form"
              component={(props) => <Form {...props} />} >
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

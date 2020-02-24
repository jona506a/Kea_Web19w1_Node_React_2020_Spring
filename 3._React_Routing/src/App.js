import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './pages/about/About';
import Theme from './pages/theme/Theme';
import Form from './pages/form/Form';

class App extends Component {
/*   constructor(props) {
    super(props);
    this. */state = {
      backgroundColor: undefined,
      welcomeMessage: "Hello dear stranger!"
    }
/*     this.onThemeChange = this.onThemeChange.bind(this);
  } */

  onThemeChange = (backgroundColor) => {
    console.log("This is the color", backgroundColor);
    this.setState({ backgroundColor });
  }

  onNameChange = (firstName, lastName) => {
    console.log("let me log those ", firstName, lastName);
    if (firstName !== "" && lastName !== "") {
      const welcomeMessage = `Welcome back ${firstName} ${lastName}.`;
      this.setState({ welcomeMessage });
    }
  }

  render() {
    const { backgroundColor, welcomeMessage } = this.state;

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
              <h1>{welcomeMessage}</h1>
            </Route>
            <Route path="/form"
              component={(props) => <Form {...props} handleNameChange={this.onNameChange} />} >
            </Route>
            <Route path="/theme" 
              component={(props) => <Theme {...props} handleThemeChange={this.onThemeChange} />} >
            </Route>
            <Route path="/about" 
              component={(props) => <About {...props} />} >
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

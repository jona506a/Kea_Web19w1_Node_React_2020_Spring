import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './pages/about/About';
import Theme from './pages/theme/Theme';
import Form from './pages/form/Form';
import { FaBeer, FaHamsa } from 'react-icons/fa';
import Cities from './pages/cities/Cities';

class App extends Component {
/*   constructor(props) {
    super(props);
    this. */state = {
      backgroundColor: undefined,
      welcomeMessage: <h1>Hello dear stranger!<FaBeer /></h1>
    }
/*     this.onThemeChange = this.onThemeChange.bind(this);
  } */

  componentDidMount() {
    const welcomeMessageString = localStorage.getItem("welcomeMessage");
    if (welcomeMessageString) {
      const welcomeMessage = <h1>{welcomeMessageString}<FaHamsa /></h1>;
      this.setState({ welcomeMessage });
    }
  }

  onThemeChange = (backgroundColor) => {
    console.log("This is the color", backgroundColor);
    this.setState({ backgroundColor });
  }

  onNameChange = (firstName, lastName) => {
    if (firstName !== "" && lastName !== "") {
      const welcomeMessageString = `Welcome back ${firstName} ${lastName}`;
      const welcomeMessage = <h1>{welcomeMessageString}<FaHamsa /></h1>;
      this.setState({ welcomeMessage });
      localStorage.setItem("welcomeMessage", welcomeMessageString);
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
                <Link to="/cities">Cities</Link>
              </ul>
              <ul>
                <Link to="/about">About</Link>
              </ul>
          </nav>

          <Switch>
            <Route exact path="/">
              {welcomeMessage}
            </Route>
            <Route path="/form"
              component={(props) => <Form {...props} handleNameChange={this.onNameChange} />} >
            </Route>
            <Route path="/theme" 
              component={(props) => <Theme {...props} handleThemeChange={this.onThemeChange} />} >
            </Route>
            <Route path="/cities" 
              component={(props) => <Cities />} >
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

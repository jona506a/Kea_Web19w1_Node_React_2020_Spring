import React, { Component } from 'react';
import './App.css';
import ProfilePage from './components/profile_page/ProfilePage';
import BusPage from './components/bus_page/BusPage';

class App extends Component {

  onNavButtonClicked = (text) => {
    console.log(text);
  };

  render() {
    return (
      <div className="App">
        <button onClick={() => console.log("it worked")}>Bus Page</button>
        <button onClick={() => console.log("also works")}>Profile Page</button>
        <BusPage />
        <ProfilePage />
      </div>
    );
  }
}

export default App;

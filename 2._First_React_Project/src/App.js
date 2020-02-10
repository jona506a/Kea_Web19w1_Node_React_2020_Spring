import React, { Component } from 'react';
import './App.css';
import ProfilePage from './components/profile_page/ProfilePage';
import BusPage from './components/bus_page/BusPage';
import Profile from './components/profile_page/Profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navpage: 'buspage'
    };
  }

  onNavButtonClicked = (navpage) => {
    this.setState({ navpage });
  };

  render() {
    const { navpage } = this.state;

    console.log("this is the nav value:", navpage);

    return (
      <div className="App">
        <button onClick={() => this.onNavButtonClicked('buspage')}>Bus Page</button>
        <button onClick={() => this.onNavButtonClicked('profilepage')}>Profile Page</button>
        { navpage === 'buspage' ? 
          <BusPage /> 
          :
          <ProfilePage />
        }
      </div>
    );
  }
}

export default App;

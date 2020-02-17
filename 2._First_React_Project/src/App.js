import React, { Component } from 'react';
import './App.css';
import ProfilePage from './components/profile_page/ProfilePage';
import BusPage from './components/bus_page/BusPage';
import ButtonWithProps from './components/button/ButtonWithProps';
import CarPage from './components/car_page/CarPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navpage: 'buspage'
    };
  }

  handleNavButtonClicked = (navpage) => {
    if (navpage === 'buspage') {
      this.setState({ pageToRender: <BusPage />})
    } else if (navpage === 'profilepage') {
      this.setState({ pageToRender: <ProfilePage />})
    } else if (navpage === 'carpage') {
      this.setState({ pageToRender: <CarPage />})
    }
    // this.setState({ navpage });
  };

  handleButtonClicked = (text) => {
    console.log(text);
  }

  render() {
    const { navpage } = this.state;

    console.log("this is the nav value:", navpage);

    return (
      <div className="App">
        <ButtonWithProps buttonText={"Submit"} customStyle={{ backgroundColor: "red" }} 
                        onButtonClicked={() => this.handleButtonClicked("First button ever created clicked")} />
        <button onClick={() => this.handleNavButtonClicked('buspage')}>Bus Page</button>
        <button onClick={() => this.handleNavButtonClicked('profilepage')}>Profile Page</button>
        <button onClick={() => this.handleNavButtonClicked('carpage')}>Car Page</button>
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

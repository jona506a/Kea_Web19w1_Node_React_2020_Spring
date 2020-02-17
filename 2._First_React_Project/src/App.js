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
      pageToRender: undefined
    };
  }

  handleButtonClicked = (text) => {
    console.log(text);
  }

  render() {
    const { pageToRender } = this.state;

    return (
      <div className="App">
        <ButtonWithProps buttonText={"Bus Page"} customStyle={{ backgroundColor: "yellow" }} 
                        onButtonClicked={() => this.setState({ pageToRender: <BusPage />})} />
        <ButtonWithProps buttonText={"Car Page"} customStyle={{ backgroundColor: "grey" }} 
                        onButtonClicked={() => this.setState({ pageToRender: <CarPage />})} />
        <ButtonWithProps buttonText={"Profile Page"}  
                        onButtonClicked={() => this.setState({ pageToRender: <ProfilePage />})} />                      
        { pageToRender }
      </div>
    );
  }
}

export default App;

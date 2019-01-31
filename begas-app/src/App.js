import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const CITY = [
  { name: "Palo Alto", zip: "11111" },
  { name: "San Jose", zip: "22222" },
  { name: "Santa Cruz", zip: "33333" },
  { name: "Honolulu", zip: "44444" }
];

class Weather extends Component{
  render(){
    return (
      <h1>Мой первый сюжет о погоде для города {this.props.zip} </h1>
    )
  }
}


class App extends Component {

  constructor(){
    super();
    this.state = {
      activePlace: 1,
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Я выучу Реакт за три месяца!
          </p>
        </header>

        {CITY.map((place, index) => (
          <button
            key={index}
            onClick={() => {
              this.setState({activePlace:index})
            }}
          >
              {place.name}
          </button>
    ))}
    <Weather
        key = {activePlace}
        zip = {CITY[activePlace].zip} />
      </div>
    );
  }
}




export default App;
// export Weather;

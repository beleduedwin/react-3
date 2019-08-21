import React, { Component } from 'react';
import logo from './logo.svg';
import Lamp from './Lamp'
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            working: false
        };

    }

    handleClick = () => {
        this.setState({ working: !this.state.working });
    };

  render() {
      const working = this.state.working ? 'working' : 'repositing';
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className={working} alt="logo" />
            <h1 className="App-title">Simpsons Quotes</h1>
          </header>
            <button onClick={this.handleClick}>
                {working}
            </button>
          <Lamp on />
          <Lamp />
        </div>
    );
  }
}

export default App;

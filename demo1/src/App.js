import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App__Hero'>
          <div className='App__Hero__Button-Group'>
            <button className='App__Button'>Learn More</button>
            <button className='App__Button'>Invest</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

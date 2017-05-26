import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App__Hero'>
          <div className='App__Hero__Button-Group'>
            <button className='App__Button'>LEARN MORE</button>
            <button className='App__Button fundpaas-widget-invOn__investButton'
                    type="button" 
                    data-offering-id="INVOFF-9P51M2VDU7U8I" 
                    disabled
            >INVEST</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

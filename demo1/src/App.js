import React, { Component } from 'react';
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App__Hero'>
          <div className="App__Hero-Banner-Group">
            <ResponsiveImage>
              <ResponsiveImageSize
                default
                minWidth={0}
                path={'./assets/images/main.jpg'}
              />
              <ResponsiveImageSize
                minWidth={1200}
                path={'./assets/images/banner.png'}
              />
            </ResponsiveImage>
            <div className='App__Hero__Button-Group'>
              <button className='App__Button'>LEARN MORE</button>
              <button className='App__Button fundpaas-widget-invOn__investButton'
                      type="button" 
                      data-offering-id="INVOFF-495HM68QL2CNC" 
                      disabled
              >INVEST</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

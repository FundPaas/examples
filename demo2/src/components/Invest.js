import React, { Component } from 'react'

class Invest extends Component{
  componentWillMount() {
    const script = document.createElement('script');
    script.src = 'http://local.fundpaas.com:3000/widgets/invOn/widgetsLoader?businessId=B-2CD1ZOW2&offeringId=INVOFF-7QQFGEJINNUK2';
    script.async = true;
    document.body.appendChild(script);
  }

  render(){
    return (
      <div className='App__Container'>
        <div className="App__Invest">
          <h1>Invest</h1>
          <hr />
          <div className="fundpaas-widget-invOn__inlineContainer" data-offering-id="INVOFF-7QQFGEJINNUK2"></div>
        </div>
      </div>
    );
  }
}

export default Invest;
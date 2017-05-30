import React, { Component } from 'react'

class Invest extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentWillMount() {
    const script = document.createElement('script');
    script.type = "text/javascript";
    script.src = 'http://local.fundpaas.com:3000/widgets/invOn/widgetsLoader?businessId=B-2CD1ZOW2&offeringId=INVOFF-7QQFGEJINNUK2';
    script.async = true;
    document.body.appendChild(script);

    setTimeout(() => {
      this.setState({
        isLoading: false
      });
    }, 1000);
  }

  render(){
    return (
      <div className='App__Container'>
        <div className="App__Invest">
          <h1 className={this.state.isLoading ? 'App__Loading-Message' : 'App__Loading-Message App__Component--Hidden'}>Launching Widget...</h1>
          <div className="fundpaas-widget-invOn__inlineContainer" data-offering-id="INVOFF-7QQFGEJINNUK2"></div>
        </div>
      </div>
    );
  }
}

export default Invest;
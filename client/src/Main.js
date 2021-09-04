import React from 'react';
import './Main.css';

class Main extends React.Component {

  render() {



   return (
      <div className="container">

        <div id="palceholder1" className="placeholder">hello {this.props.responseCurrency[0]}</div>
        <div id="palceholder2" className="placeholder"></div>
        <div id="palceholder3" className="placeholder"></div>
      </div>
    );
  }
}

export default Main;

import React from 'react';
import './Main.css';
import ReactTooltip from "react-tooltip";
import Dropdown from 'react-dropdown';
import Select from 'react-select';
import 'react-dropdown/style.css';
import $ from 'jquery';


class Main1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     brand: "lord",
     result: this.props.items,
    };
  }

  myFunc = () => {
  const result = { ...this.state.result};
  result.A = "blue";
  this.setState({result})
  console.log("i'm there", result.A)
  }


  render() {
    return (
      <div>
        <h1>My Car {this.state.brand}</h1>
        {console.log("i'm here",this.state.result)}
      </div>
    );
  }

}
export default Main1;

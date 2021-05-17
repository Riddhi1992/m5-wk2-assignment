// import logo from './logo.svg';
import './App.css';
import Nav from "./navbar";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { products } from "./Products"
import DisplayProducts from "./displayProducts"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Products: products      
    }
  }
  
  handleIncrement = (addvalue) => {
    if(addvalue.value < 10) {
      const updatedValue = addvalue.value++;
      this.setState({updatedValue});
    }
  }
  handledecrement = (decvalue) => {
    if(decvalue.value > 0) {
      const updatedValue = decvalue.value--;
      this.setState({updatedValue});
    }
  }



  render() {
    return (
      {}, 
      (
        <div className="App">
          <Nav />
          <DisplayProducts Products={this.state.Products} />
        </div>
      )
    )
  }
}

export default App;

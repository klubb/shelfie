import React, { Component } from "react";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import axios from "axios";

import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventory: ["asd"],
      currentProduct: ""
    };
  }

  componentDidMount = () => {
    axios.get("/api/inventory").then(res => {
      this.setState({
        inventory: res.data
      });
    });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          <Dashboard
            get={this.componentDidMount}
            inventory={this.state.inventory}
          />
          <Form
            inventory={this.state.inventory}
            current={this.state.currentProduct}
            get={this.componentDidMount}
          />
        </div>
      </div>
    );
  }
}

export default App;

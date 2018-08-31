import React, { Component } from "react";
import axios from "axios";
import Product from "../Product/Product";
import "/Users/emily/devmtn/simulation1/shelfie/src/Components/Form/form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageurl: "",
      name: "",
      price: 0,
      currentProduct: this.props.current,
      inventory: this.props.inventory
    };
  }

  handleImageInput = e => {
    this.setState({
      imageurl: e.target.value
    });
  };

  handleNameInput = e => {
    this.setState({
      name: e.target.value
    });
  };

  handlePriceInput = e => {
    this.setState({
      price: e.target.value
    });
  };

  handleCancel = () => {
    this.setState({
      imageurl: "",
      name: "",
      price: 0
    });
  };

  //   addInventory() {
  //     const newItem = {
  //         name: this.state.name,
  //         price: this.state.price,
  //         image_url: this.state.image_url
  //     };

  //     axios.post('/api/inventory', newItem).then(() => {

  //     });
  // }

  addInventory = () => {
    axios
      .post("/api/product/:id", {
        name: this.state.name,
        price: this.state.price,
        image: this.state.imageurl
      })
      .then(res => {
        this.props.get();
        this.handleCancel();
      });
  };

  render() {
    return (
      <div className="form-container">
        <h3>Image Url:</h3>
        <input
          value={this.state.imageurl}
          onChange={this.handleImageInput}
          placeholder="image url goes here"
          type="text"
        />
        <h3>Product Name: </h3>
        <input
          value={this.state.name}
          onChange={this.handleNameInput}
          placeholder="name of product"
          type="text"
        />
        <h3>Price: </h3>
        <input
          value={this.state.price}
          onChange={this.handlePriceInput}
          placeholder="price"
          type="text"
        />
        <div className="button-container">
          <button className="btn" onClick={this.handleCancel}>
            Cancel
          </button>

          <button className="btn" onClick={() => this.addInventory()}>
            Add to Inventory
          </button>
        </div>
      </div>
    );
  }
}

export default Form;

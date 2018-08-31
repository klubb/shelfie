import React, { Component } from "react";
import Product from "/Users/emily/devmtn/simulation1/shelfie/src/Components/Product/Product.js";
import axios from "axios";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventoryList: []
    };
  }

  deleteProduct = () => {
    axios.delete("/api/product/:id").then(() => {
      this.props.get();
    });
  };

  render() {
    let inventory = this.props.inventory.map((product, index) => {
      return (
        <div>
          <Product
            key={index}
            delete={this.deleteProduct}
            name={product.name}
            price={product.price}
            image={product.image_url}
          />
        </div>
      );
    });
    return <div>{inventory}</div>;
  }
}

export default Dashboard;

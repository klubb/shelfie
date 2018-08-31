import React, { Component } from "react";
import "/Users/emily/devmtn/simulation1/shelfie/src/Components/Product/product.css";

export default function Product(props) {
  return (
    <div className="product-container">
      <h1>Name: {props.name}</h1>
      <h1>Price: {props.price}</h1>
      <h1>Image: {props.image}</h1>
      <button onClick={props.delete}>Delete</button>
    </div>
  );
}

import React, { Component } from "react";
import ComponentB from "./ComponentB";

export default class ComponentA extends Component {
  constructor() {
    super();
    this.state = {
      name: "Component A",
      data: [],
    };
    console.log("Inside Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Inside getDerivedStateFromProps");
    return null;
  }

  render() {
    console.log("Inside Render");
    console.log(this.state.data);
    return (
      <>
        <h1>Component A</h1>
        {this.state.data.length === 0 ? (
          <p>No data</p>
        ) : (
          <ul>
            {this.state.data.map((ele, index) => (
              <li key={index}>{ele.name}</li>
            ))}
          </ul>
        )}
      </>
    );
  }

  componentDidMount() {
    console.log("Inside componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          data,
        });
      });
  }
}

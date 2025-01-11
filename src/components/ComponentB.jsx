import React, { Component } from "react";

export default class ComponentB extends Component {
  constructor() {
    super();
    this.state = {
      name: "Component B",
    };
    console.log("Inside Constructor B");
  }

  static getDerivedStateFromProps() {
    console.log("Inside getDerivedStateFromProps B");
    return null;
  }

  render() {
    console.log("Inside Render B");
    return <h1>Component B</h1>;
  }

  componentDidMount() {
    console.log("Inside componentDidMount B");
  }
}

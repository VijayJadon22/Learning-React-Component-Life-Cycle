import React, { Component } from "react";

export default class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: 0,
      currentTime: 0,
    };
    this.timer = null;
    console.log("Inside constructor");
  }

  static getDerivedStateFromProps() {
    console.log("Inside getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Inside componentDidMount");
    // this.setState({
    //   name: "ajay",
    // });
  }

  getSnapshotBeforeUpdate() {
    console.log("Inside getSnapshotBeforeUpdate");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Inside shouldComponentUpdate");
    return nextState.time % 5 === 0;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Inside componentDidUpdate");

    if (prevProps.timerOn !== this.props.timerOn) {
      if (this.props.timerOn) {
        this.timer = setInterval(() => {
          this.setState((prevState) => ({
            time: prevState.time + 1,
          }));
        }, 1000);
      } else {
        clearInterval(this.timer);
        // this.setState({
        //   time:0
        // })
      }
    }
  }

  componentWillUnmount() {
    console.log("Component unmounted");
  }

  updateTime = () => {
    if (this.state.time % 5 === 0) {
      this.setState({
        currentTime: this.state.time,
      });
    }
  };

  render() {
    console.log("Inside render");
    return (
      <>
        <h1>
          Time : {new Date(this.state.time * 1000).toISOString().slice(11, 19)}
        </h1>
      </>
    );
  }
}

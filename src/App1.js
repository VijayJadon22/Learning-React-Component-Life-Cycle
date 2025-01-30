import React, { Component } from "react";
import Timer from "./components/Timer";

export default class App1 extends Component {
    constructor() {
        super();
        this.state = {
            timerOn: false,
            mount: true,
        }
        console.log("inside app1 constructor");
    }

    toggleTimer = () => {
        this.setState((prevState) => ({
            timerOn: !prevState.timerOn,
        }))
    };

    handleMount = () => {
        this.setState((prevState) => {
            return {
                mount: !prevState.mount,
                timerOn: false
            }
        })
    };

    render() {
        return (
            <div className="App">
                {this.state.mount ? <Timer timerOn={this.state.timerOn} /> : null}
                <button style={{ margin: "5px" }} onClick={this.toggleTimer}>{this.state.timerOn ? "STOP" : "START"}</button>
                <button onClick={this.handleMount}>{this.state.mount ? "Un-Mount" : "Mount"}</button>
            </div>
        );
    }
};
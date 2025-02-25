import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false,
            Error: "",
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            Error: error,
        };
    }

    componentDidCatch(error, info) {
        console.log("Error : ", error);
        console.log("Error Info : ", info);
    }
    render() {
        if (this.state.hasError) {
            return (
                <h1>Something Went Wrong</h1>
            )
        }
        return (
            this.props.children
        )
    }
}

export default ErrorBoundary;
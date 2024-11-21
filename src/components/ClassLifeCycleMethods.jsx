import React, { Component } from "react";

class ClassLifeCycleMethods extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("Constructor called");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps called", state.count);
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount called");
    // this.timerID = setInterval(() => {
    //   this.setState({ count: this.state.count + 1 });
    // }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate called", nextState.count);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate called", prevState.count);
    return prevState.count;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate called", prevState, snapshot);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called");
    clearInterval(this.timerID);
  }

  render() {
    console.log("Render called");
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </div>
    );
  }
}

export default ClassLifeCycleMethods;

import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  incrementCount() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log("count", this.state.count);
      }
    );
  }
  render() {
    return (
      <div>
        <h1>Count-{this.state.count}</h1>
        <button onClick={() => this.incrementCount()}>Increment</button>
      </div>
    );
  }
}

export default Counter;

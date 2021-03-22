import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <span className={this.setBadgeStyle()}>{this.state.count}</span>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => this.onIncrement()}
        >
          +
        </button>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => this.onDecrement()}
        >
          -
        </button>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => this.onDelete({ id: 10 })}
        >
          Delete
        </button>
      </div>
    );
  }

  setBadgeStyle() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  onIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  onDecrement = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };

  onDelete = () => {};
}

export default Counter;

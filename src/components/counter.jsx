import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { counter, onIncrement, onDecrement, onDelete } = this.props;

    const btnStyle = "btn btn-secondary btn-sm m-2 btn-warning";
    const btnDangerStyle = btnStyle + " btn-danger";

    return (
      <div>
        <span className="badge badge-primary m-2 rounded-pill">
          {counter.value}
        </span>
        <button className={btnStyle} onClick={() => onIncrement(counter)}>
          +
        </button>
        <button className={btnStyle} onClick={() => onDecrement(counter)}>
          -
        </button>
        <button className={btnDangerStyle} onClick={() => onDelete(counter)}>
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;

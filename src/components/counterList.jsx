import React, { Component } from "react";
import Counter from "./counter";

class CounterList extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 3 },
      { id: 3, value: 0 },
      { id: 4, value: 8 },
    ],
  };

  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={this.handleOnIncrement}
            onDecrement={this.handleOnDecrement}
            onDelete={this.handleOnDelete}
          />
        ))}
      </div>
    );
  }

  handleOnIncrement = (counter) => {
    this.counterAction("+", counter);
  };

  handleOnDecrement = (counter) => {
    this.counterAction("-", counter);
  };

  handleOnDelete = (counter) => {
    const counters = this.state.counters.filter((c) => c.id !== counter.id);
    this.setState({ counters });
  };

  counterAction = (action, counter) => {
    const counters = [...this.state.counters];
    const counterIndex = counters.indexOf(counter);
    counters[counterIndex] = { ...counter };

    if (action === "+") {
      counters[counterIndex].value++;
    } else if (action === "-") {
      if (counters[counterIndex].value > 0) {
        counters[counterIndex].value--;
      }
    }

    this.setState({ counters });
  };
}

export default CounterList;

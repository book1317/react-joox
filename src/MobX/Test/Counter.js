import React from "react";
import { observer } from "mobx-react";

@observer
class Counter extends React.Component {
  increase = () => {
    this.props.counterStore.increase();
  };
  decrease = () => {
    this.props.counterStore.decrease();
  };
  show = () => {
    this.props.counterStore.show();
  };

  render() {
    return (
      <div>
        <button className="increase" onClick={this.increase}>
          +
        </button>
        <span>{this.props.counterStore.count}</span>
        <button className="decrease" onClick={this.decrease}>
          -
        </button>
      </div>
    );
  }
}
export default Counter;

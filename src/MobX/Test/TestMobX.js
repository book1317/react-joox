//app.js
import React from "react";
import Counter from "./Counter";
import CounterStore from "./CounterStore";
let counterStore = new CounterStore();
export default class TestMobX extends React.Component {
  render() {
    return (
      <div>
        <Counter counterStore={counterStore} />
      </div>
    );
  }
}

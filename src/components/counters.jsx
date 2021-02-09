import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const {
      onAddCartClick,
      onResetHandle,
      // onDeleteHandle,
      onIncrementHandle,
      onDecrementHandle,
      counters,
      dataCheck,
    } = this.props;
    return (
      <div>
        {/* <button onClick={onResetHandle} className="btn btn-primary btn-sm m-2">
          Reset
        </button> */}
        <div className="row">
          {dataCheck.map((counter) => (
            <Counter
              key={counter.id}
              // dataCheck={dataCheck}
              counter={counter}
              onAddCartClick={onAddCartClick}
              // onDelete={onDeleteHandle}
              onIncrement={onIncrementHandle}
              onDecrement={onDecrementHandle}
              // value={counter.value}
              // id={counter.id}
            >
              {/* <kbd>Counter #{counter.id}</kbd> */}
            </Counter>
          ))}
        </div>
      </div>
    );
  }
}

export default Counters;

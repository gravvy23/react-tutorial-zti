import React from "react";

const getInitialCounterValue = () => 10;

export const SetCountCallback = () => {
  const [count, setCount] = React.useState(getInitialCounterValue);

  return (
    <div className="container">
      <p className="m-3">Counter: {count}</p>
      <div>
        <button
          type="button"
          className="btn btn-primary m-3"
          onClick={() => setCount(counter => counter + 1)}
        >
          Increase
        </button>
        <button
          type="button"
          className="btn btn-primary m-3"
          onClick={() => setCount(counter => counter - 1)}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};




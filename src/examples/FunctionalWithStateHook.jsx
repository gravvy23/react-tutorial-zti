import React from "react";

export const FunctionalWithStateHook = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div class="container">
      Counter: {count}
      <div>
        <button
          type="button"
          className="btn btn-primary m-3"
          onClick={() => setCount(count + 1)}
        >
          Increase
        </button>
        <button
          type="button"
          className="btn btn-primary m-3"
          onClick={() => setCount(count - 1)}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

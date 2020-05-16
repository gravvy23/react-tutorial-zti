import React from "react";

export const FunctionalWithEffect = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div className="container">
      <p className="m-3">Counter: {count}</p>
      <button
        type="button"
        className="btn btn-dark m-3"
        onClick={() => setCount((counter) => counter + 1)}
      >
        Increase counter
      </button>
    </div>
  );
};

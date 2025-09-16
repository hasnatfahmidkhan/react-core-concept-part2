import { useState } from "react";
import "../App.css";
const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    count > 0 && setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };
  return (
    <div>
      <h3 className="text-4xl">Counter: {count}</h3>
      <div className="flex gap-3 my-4">
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;

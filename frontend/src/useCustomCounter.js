import { useState } from "react";

const useCustomCounter = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount((prev) => prev - 1);
  }

  return { count, increment, decrement };
};

export default useCustomCounter;

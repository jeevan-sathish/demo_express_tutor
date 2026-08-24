import useCustomCounter from "./useCustomCounter";

const App = () => {
  const { count, increment, decrement } = useCustomCounter();
  return (
    <div>
      {count}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default App;

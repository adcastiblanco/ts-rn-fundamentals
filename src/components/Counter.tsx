import useCounter from "../hooks/useCounter";
function Counter() {
  const { count, handleCount } = useCounter(11);
  return (
    <div>
      <h3>Counter</h3>
      <span>{count}</span>
      <button onClick={() => handleCount(1)}>+</button>
      <button onClick={() => handleCount(-1)}>-</button>
    </div>
  );
}

export default Counter;

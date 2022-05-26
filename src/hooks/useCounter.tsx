import React from "react";

function useCounter(initialValue: number) {
  const [count, setCount] = React.useState<number>(initialValue);
  const handleCount = (number: number) => setCount(count + number);
  return { count, handleCount };
}

export default useCounter;

import {  useState } from "react";

export const Third = () => {
  const [count, setCount] = useState(0);
  //   setCount(count + 1);
  //   setCount(count + 1);
console.log(undefined ==null)
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
};

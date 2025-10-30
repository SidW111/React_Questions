import { useState } from "react";

export function Four() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full min-h-screen flex items-center justify-center ">
      <div className="">
        <p>{count}</p>
        <div className="flex gap-2">
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </button>
          <button onClick={() => setCount(count - 1)} disabled={count < 1}>
            -
          </button>
        </div>
      </div>
    </div>
  );
}

//See the code and ans what will it render
import { useEffect, useState } from "react";

export default function First() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
    console.log("mounted");
  }, []);

  return (
    <div>
      <p>count is : {count}</p>
    </div>
  );
}

//this code will render infinitely coz the dep array changes
//to solve this we  will have to provide the empty dep array

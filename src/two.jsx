import Counter from "./counter.jsx";
import {useAtom} from "jotai";
import {atomCounter} from "./atom.js";
import {useEffect} from "react";

function Two() {
  const [count, setCount] = useAtom(atomCounter);

  useEffect(() => {
    console.log("Two atom", count);
  }, [count]);

  return (
    <div>
      <h1>Two atom {count}</h1>
      <Counter/>
      <button onClick={() => setCount((count) => count + 1)}>atom add</button>
    </div>
  );
}

export default Two;
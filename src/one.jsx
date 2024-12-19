import Counter from "./counter.jsx";
import {useAtom} from "jotai";
import {atomCounter} from "./atom.js";
import {useEffect} from "react";

function One() {

  const [count, setCount] = useAtom(atomCounter);


  useEffect(() => {
    console.log("One atom", count);
  }, [count]);

  return (
    <div>
      <h1>One atom {count}</h1>
      <Counter/>
      <button onClick={() => setCount((count) => count + 1)}>atom add</button>
    </div>
  );
}

export default One;
import { useState } from 'react';
import One from "./one.jsx";
import Two from "./two.jsx";
import KeepAlive from "react-activation";
import {atomCounter} from "./atom.js";
import {useSetAtom} from "jotai";


function Parent() {
  const [showOne, setShowOne] = useState(true);
  const [showTwo, setShowTwo] = useState(false);

  const setCount = useSetAtom(atomCounter);


  return (
    <>
      <div>
        {showOne && <One />}
        {showTwo && <KeepAlive cacheKey={'test'} when={true}>
          <Two />
        </KeepAlive>}
      </div>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>parent add atom </button>
        <button onClick={() => showOne ? setShowOne(false) : setShowOne(true)}>show one</button>
        <button onClick={() => showTwo ? setShowTwo(false) : setShowTwo(true)}>show two</button>
      </div>
    </>


  );
}

export default Parent;
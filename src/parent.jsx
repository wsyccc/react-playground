import {useMemo, useState} from 'react';
import One from "./one.jsx";
import Two from "./two.jsx";
import KeepAlive from "react-activation";
import {atomCounter} from "./atom.js";
import {useSetAtom} from "jotai";


function Parent() {
  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);

  const setCount = useSetAtom(atomCounter);

  const test = {
    "stateEnable": {
      "data": false,
      "type": "StateEnable",
      "applyToAllState": true
    }
  };

  const render = useMemo(() => {
    return Object.entries(test).map(([key, value]) => {
      return <Two key={key} value={value} />;
    });
  }, [test]);


  return (
    <>
      <div>
        {showOne && <One />}
        {showTwo && <KeepAlive cacheKey={'test'} name={'test'} when={false}>
          {render}
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
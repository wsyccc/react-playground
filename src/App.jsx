import './App.css'
import {AliveScope} from "react-activation";
import Parent from "./parent.jsx";

function App() {
  return (
    <AliveScope>
      <Parent />
    </AliveScope>
  );
}

export default App

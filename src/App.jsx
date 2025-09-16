import { useState } from "react";
import "./App.css";
import Batsman from "./components/Batsman";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Batsman />
    </>
  );
}

export default App;

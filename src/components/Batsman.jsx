import { useState } from "react";
import "../App.css";
const Batsman = () => {
  const [run, setRun] = useState(0);
  const [sixes, setSixes] = useState(0);
  const handleSingle = () => {
    setRun(run + 1);
  };
  const handleSix = () => {
    setRun(run + 6);
    setSixes(sixes + 1)
  };
  return (
    <div>
      <h3 className="text-3xl mb-2">Player Bangladeshi</h3>
      <p className="text-2xl mb-2">Score: {run}</p>
      <p className="text-2xl mb-2">Sixes: {sixes}</p>
      <button onClick={handleSingle}>Run 1</button>
      <button onClick={handleSix}>Run 6</button>
    </div>
  );
};

export default Batsman;

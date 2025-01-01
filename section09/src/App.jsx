import { useState } from "react";
import "./App.css";
import Exam from "./component/Exam";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Exam></Exam>
    </>
  );
}

export default App;

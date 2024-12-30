import { useState } from "react";
import "./App.css";
import CalViewer from "./component/CalViewer";
import CalController from "./component/CalController";

function App() {
  const [count, setCount] = useState("");
  const [cal, setCal] = useState(0);
  return (
    <>
      <h1>계산기</h1>
      <CalViewer cal={cal} />
      <CalController setCount={setCount} setCal={setCal} count={count} />
    </>
  );
}

export default App;

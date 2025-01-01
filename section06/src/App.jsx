import { useState } from "react";
import "./App.css";
import CalViewer from "./component/CalViewer";
import CalController from "./component/CalController";

function App() {
  const [count, setCount] = useState("");
  const [cal, setCal] = useState("");
  return (
    <>
      <CalViewer cal={cal} />
      <CalController
        setCount={setCount}
        setCal={setCal}
        count={count}
        cal={cal}
      />
    </>
  );
}

export default App;

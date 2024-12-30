import { useState } from "react";
import "./App.css";
import MainCount from "./component/MainCount";
import CountButton from "./component/Countbutton";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>카운터앱</h1>
      <MainCount count={count} />
      <CountButton setCount={setCount} />
    </>
  );
}

export default App;

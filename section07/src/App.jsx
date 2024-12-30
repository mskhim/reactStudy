import { useEffect, useRef, useState } from "react";
import "./App.css";
import CountButton from "./component/Countbutton";
import MainCount from "./component/MainCount";
import Even from "./component/Even";
function App() {
  const [count, setCount] = useState(0);
  const isMount = useRef(false);
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    } else {
      console.log;
    }
    return () => {
      console.log("end");
    };
  });

  return (
    <>
      <MainCount count={count} />
      {count % 20 === 0 ? <Even /> : ""}
      <CountButton setCount={setCount} />
    </>
  );
}

export default App;

import { useState } from "react";

function Bulb(props) {
  //내부함수를 정의한다.
  const [light, setLight] = useState("ON");
  const [dirtyCount, setDirtyCount] = useState(0);
  const clickLight = () => {
    setLight(light === "ON" ? "OFF" : "ON");
    setDirtyCount((count) => count + 1);
  };
 
  return (
    <>
    
      <button onClick={clickLight}>{light}</button>
      <p>{dirtyCount > 10 ? "더러운상태" : "깨끗한상태"}</p>
      <button onClick={setDirtyCount(0)}>청소하기</button>
    </>
  );
}

export default Bulb;

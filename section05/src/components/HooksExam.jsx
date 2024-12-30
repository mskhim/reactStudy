import { useState } from "react";

function useInput() {
  const [name, setName] = useState("");
  const onChange = (e) => {
    setName(e.target.value);
  };
  return [name, onChange];
}

const HooksExam = () => {
  const [name, onChange] = useInput();
  return (
    <>
      <div>시험용</div>
      <input type="text" value={name} onChange={onChange} />
    </>
  );
};

export default HooksExam;

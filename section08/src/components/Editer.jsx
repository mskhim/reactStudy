import { useState, useRef } from "react";
import "./Editer.css";

const Editer = ({ onInsert }) => {
  const [content, setContent] = useState("");
  const ref = useRef();
  const onSubmit = () => {
    if (content === "") {
      ref.current.focus();
      return;
    }
    onInsert(content);
    setContent("");
  };

  const onChange = (e) => {
    setContent(e.target.value);
  };
  return (
    <div className="editer">
      <input
        ref={ref}
        type="text"
        value={content}
        onChange={onChange}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editer;

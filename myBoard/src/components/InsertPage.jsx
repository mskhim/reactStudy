import { useRef, useState } from "react";
import "./insertPage.css";

const InsertPage = ({ onInsert }) => {
  const [contents, setContents] = useState("");
  const [writer, setWriter] = useState("");
  const ref1 = useRef();
  const ref2 = useRef();
  const onChange = (e) => {
    e.target.name === "writer"
      ? setWriter(e.target.value)
      : setContents(e.target.value);
  };

  return (
    <div className="insertPage">
      <div className="writer">
        <label>작성자 : </label>
        <input
          ref={ref1}
          type="text"
          name="writer"
          value={writer}
          onChange={onChange}
        />
      </div>
      <p>내용</p>
      <textarea
        ref={ref2}
        name=""
        id=""
        onChange={onChange}
        value={contents}
      ></textarea>
      <button
        onClick={() => {
          if (writer === "") {
            ref1.current.focus();
            return;
          }
          if (contents === "") {
            ref2.current.focus();
            return;
          }
          onInsert(writer, contents);
          setWriter("");
          setContents("");
          alert("게시글 등록이 완료되었습니다.");
        }}
      >
        등록
      </button>
    </div>
  );
};
export default InsertPage;

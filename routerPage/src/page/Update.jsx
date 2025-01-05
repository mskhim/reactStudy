import { useNavigate, useLocation } from "react-router-dom";
import HeaderSection from "../components/HeaderSection";
import "./Update.css"; // CSS 파일 분리
import { useContext, useRef, useState } from "react";
import { dispatchContext } from "../App";

const Update = () => {
  const nav = useNavigate();
  const board = useLocation().state;
  const { onUpdate } = useContext(dispatchContext);
  const [title, setTitle] = useState(board.title);
  const [content, setContent] = useState(board.content);

  const handleUpdate = () => {
    // 업데이트 로직 추가 가능
    onUpdate(board.id, title, content);
    alert("업데이트되었습니다." + title + content + board.id);
    nav("/"); // 업데이트 후 홈으로 이동
  };

  return (
    <>
      <HeaderSection
        b1="홈으로"
        b2="업데이트"
        onClick1={() => {
          nav("/");
        }}
        onClick2={handleUpdate}
      />
      <div className="update-container">
        <div className="form-group">
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            placeholder="제목을 수정하세요"
            className="form-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            placeholder="내용을 수정하세요"
            className="form-textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group"></div>
      </div>
    </>
  );
};

export default Update;

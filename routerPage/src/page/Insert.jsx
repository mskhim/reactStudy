import { useNavigate } from "react-router-dom";
import HeaderSection from "../components/HeaderSection";
import "./Insert.css"; // CSS 파일 분리
import { dispatchContext } from "../App";
import { useContext, useRef } from "react";

const Insert = () => {
  const nav = useNavigate();
  const refName = useRef();
  const refTitle = useRef();
  const refContent = useRef();
  const refPassword = useRef();

  const { onInsert } = useContext(dispatchContext);
  const handleSave = () => {
    onInsert(
      refName.current.value,
      refTitle.current.value,
      refContent.current.value,
      refPassword.current.value
    );
    nav("/");
  };

  return (
    <>
      <HeaderSection
        b1="홈으로"
        b2="저장"
        onClick1={() => {
          nav("/");
        }}
        onClick2={handleSave}
      />
      <div className="insert-container">
        <div className="form-group">
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            placeholder="제목을 입력하세요"
            className="form-input"
            ref={refTitle}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            placeholder="내용을 입력하세요"
            className="form-textarea"
            ref={refContent}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="title">작성자명</label>
          <input
            type="text"
            id="name"
            placeholder="작성자 이름을 입력하세요"
            className="form-input"
            ref={refName}
          />
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호를 입력하세요"
            className="form-input"
            ref={refPassword}
          />
        </div>
      </div>
    </>
  );
};

export default Insert;

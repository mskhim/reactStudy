import { useNavigate } from "react-router-dom";
import HeaderSection from "../components/HeaderSection";
import "./Update.css"; // CSS 파일 분리

const Update = () => {
  const nav = useNavigate();

  const handleUpdate = () => {
    // 업데이트 로직 추가 가능
    console.log("업데이트 버튼 클릭");
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
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            placeholder="내용을 수정하세요"
            className="form-textarea"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호를 입력하세요"
            className="form-input"
          />
        </div>
      </div>
    </>
  );
};

export default Update;

import { useNavigate } from "react-router-dom";
import HeaderSection from "../components/HeaderSection";
import "./Select.css"; // CSS 파일 분리
import Button from "../components/Button";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Select = () => {
  const board = useLocation().state;
  const handleEdit = () => {
    console.log("수정하기 버튼 클릭");
  };
  const nav = useNavigate();

  const currentRating = 4; // 예제 현재 평점

  return (
    <>
      <HeaderSection
        b1="목록으로"
        b2="수정하기"
        onClick1={() => {
          nav("/");
        }}
        onClick2={() => {
          nav("/update", { state: board });
        }}
      />
      <div className="select-container">
        <div className="info-section">
          <p>
            <strong>작성자:</strong> {board.name}
          </p>
          <p>
            <strong>작성일자:</strong>{" "}
            {new Date(board.date).toLocaleDateString()}
          </p>
        </div>
        <div className="content-section">
          <h2>{board.title}</h2>
          <p>{board.content}</p>
        </div>
        <div className="rating-section">
          <div className="current-rating">
            <strong>현재 평점:</strong> {board.rating}점
          </div>
          <div className="rating-input">
            <label htmlFor="rating">평점:</label>
            <select id="rating" className="rating-select">
              <option value="1">1점</option>
              <option value="2">2점</option>
              <option value="3">3점</option>
              <option value="4">4점</option>
              <option value="5">5점</option>
            </select>
            <Button text={"입력"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Select;

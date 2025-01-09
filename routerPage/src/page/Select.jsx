import { useNavigate } from "react-router-dom";
import HeaderSection from "../components/HeaderSection";
import "./Select.css"; // CSS 파일 분리
import Button from "../components/Button";
import { useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import { updateBoard, deleteBoard } from "../api/api";

const Select = () => {
  const location = useLocation();
  const board = location.state; // 선택한 게시물의 ID 가져오기
  const nav = useNavigate();
  const pwdRef = useRef();
  const [rate, setRate] = useState(board.rate);
  const [ratecount, setRatecount] = useState(board.ratecount);
  const formattedDate = new Date(board.regDate).toLocaleString("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  //수정하기 클릭시 비밀번호 확인
  const clickUpdate = () => {
    if (pwdRef.current.value === "") {
      alert("비밀번호를 입력해주세요.");
      pwdRef.current.focus();
      return;
    }
    if (pwdRef.current.value !== board.password) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    } else alert("수정 페이지로 이동합니다.");
    nav("/update", { state: board });
  };
  //삭제하기 클릭시 비밀번호 확인
  const clickDelete = () => {
    if (pwdRef.current.value === "") {
      alert("비밀번호를 입력해주세요.");
      pwdRef.current.focus();
      return;
    }
    if (pwdRef.current.value !== board.password) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    } else deleteBoard(board.no);
    alert("삭제되었습니다.");
    nav("/");
  };
  //평점입력 메소드
  const clickRate = () => {
    const rate = document.querySelector(".rating-select").value;

    let newrate =
      (board.rate * board.ratecount + parseInt(rate)) / (board.ratecount + 1);
    newrate = newrate.toFixed(2); // 소숫점 2자리까지 표시
    console.log(newrate);
    updateBoard(board.no, {
      no: board.no,
      title: board.title,
      content: board.content,
      writer: board.writer,
      password: board.password,
      rate: newrate,
      ratecount: ratecount + 1,
    });
    setRate(newrate);
    setRatecount(ratecount + 1);
    alert("평점이 입력되었습니다.");
  };
  return (
    <>
      <HeaderSection
        b1="목록으로"
        onClick1={() => {
          nav("/");
        }}
      />
      <div className="select-container">
        <div className="info-section">
          <p>
            <strong>작성자:</strong> {board.writer}
          </p>
          <p>
            <strong>작성일자:</strong> {formattedDate}
          </p>
        </div>
        <div className="content-section">
          <h2>{board.title}</h2>
          <p>{board.content}</p>
        </div>
        <div className="rating-section">
          <div className="current-rating">
            <strong>현재 평점:</strong> {rate}점({ratecount}명)
          </div>
          <div className="buttons-div">
            <div className="rating-input">
              <label htmlFor="rating">평점:</label>
              <select id="rating" className="rating-select">
                <option value="1">1점</option>
                <option value="2">2점</option>
                <option value="3">3점</option>
                <option value="4">4점</option>
                <option value="5">5점</option>
              </select>
              <Button text={"입력"} onClick={clickRate} />
            </div>
            <div>
              <input type="password" placeholder="비밀번호" ref={pwdRef} />
              &nbsp;&nbsp;&nbsp;
              <Button text={"수정"} onClick={clickUpdate} />
              &nbsp;&nbsp;&nbsp;
              <Button text={"삭제"} onClick={clickDelete} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Select;

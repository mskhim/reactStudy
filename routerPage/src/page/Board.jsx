import React, { useContext } from "react";
import HeaderSection from "../components/HeaderSection";
import ListSection from "../components/ListSection";
import "./Board.css"; // CSS 파일 분리
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { boardContext } from "../App";
const Board = () => {
  const nav = useNavigate();
  const board = useContext(boardContext);
  let row = board.length;
  return (
    <>
      <HeaderSection
        b1="홈으로"
        b2="글쓰기"
        onClick1={() => {
          nav("/");
        }}
        onClick2={() => {
          nav("/insert");
        }}
      />
      <div className="board-container">
        <div className="search-container">
          <select className="search-select">
            <option value="">제목</option>
            <option value="">작성자</option>
          </select>
          <input type="text" placeholder="검색..." className="search-input" />
          <Button text={"검색"} />
          <select className="list-select">
            <option value="">등록일순</option>
            <option value="">평점순</option>
          </select>
        </div>
        <div className="table-container">
          <table className="list-table">
            <thead>
              <tr>
                <th className="table-header">번호</th>
                <th className="table-header">제목</th>
                <th className="table-header">작성자</th>
                <th className="table-header">평점</th>
                <th className="table-header">등록일</th>
              </tr>
            </thead>
            <tbody>
              {board.map((data) => (
                <ListSection key={data.id} board={data} row={row--} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Board;

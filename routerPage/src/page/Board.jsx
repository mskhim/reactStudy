import React, { useContext, useEffect, useRef, useState } from "react";
import HeaderSection from "../components/HeaderSection";
import ListSection from "../components/ListSection";
import "./Board.css"; // CSS 파일 분리
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { boardContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpShortWide,
  faArrowUpWideShort,
} from "@fortawesome/free-solid-svg-icons";

const Board = () => {
  const nav = useNavigate();
  const board = useContext(boardContext);
  const [filter, setFilter] = useState(board);
  const [searchFlag, setSearchFlag] = useState(false);
  const [sortFlag, setSortFlag] = useState(true);
  const [row, setRow] = useState(board.length);

  useEffect(() => {
    setFilter(board);
  }, [board]);
  useEffect(() => {
    setRow(filter.length);
  }, [filter]);

  const clickSearch = () => {
    const search = document.querySelector(".search-input").value;
    if (search === "") {
      alert("검색어를 입력해주세요.");
      return;
    }
    const select = document.querySelector(".search-select").value;
    setSearchFlag(true);
    if (select === "title") {
      setFilter(board.filter((data) => data.title.includes(search)));
    } else {
      setFilter(board.filter((data) => data.name.includes(search)));
    }
    setRow(filter.length);
  };
  const clickClear = () => {
    document.querySelector(".search-input").value = "";
    setFilter(board);
    setSearchFlag(false);
  };

  const changeSort = (e) => {
    const select = e.target.value;
    const sortFilter = [...filter];
    if (select === "date") {
      setFilter(sortFilter.sort((a, b) => new Date(b.date) - new Date(a.date)));
    } else {
      setFilter(sortFilter.sort((a, b) => b.rating - a.rating));
    }
    setSortFlag(true);
  };

  const clickMount = () => {
    setSortFlag(!sortFlag);
    setFilter([...filter].reverse());
  };

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
            <option value="title">제목</option>
            <option value="name">작성자</option>
          </select>
          <input type="text" placeholder="검색..." className="search-input" />
          {searchFlag || <Button text={"검색"} onClick={clickSearch} />}

          {searchFlag && <Button text={"검색취소"} onClick={clickClear} />}
          <select className="list-select" onChange={changeSort}>
            <option value="date">등록일순</option>
            <option value="rate">평점순</option>
          </select>
          {sortFlag ? (
            <FontAwesomeIcon
              icon={faArrowUpWideShort}
              className="icon"
              onClick={clickMount}
            />
          ) : (
            <FontAwesomeIcon
              icon={faArrowUpShortWide}
              className="icon"
              onClick={clickMount}
            />
          )}
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
              {filter.map((data, index) => (
                <ListSection key={data.id} board={data} row={row - index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Board;

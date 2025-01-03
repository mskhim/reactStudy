import { useEffect, useState, useContext } from "react";
import SelectList from "./SelectList";
import "./SelectPage.css"; // 위의 CSS를 여기에 적용
import { boardStateContext } from "../App";

const SelectPage = () => {
  const board = useContext(boardStateContext);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(board);

  useEffect(() => {
    setFilter(board); // 부모에서 전달된 board가 변경될 때 filter 동기화
  }, [board]);

  return (
    <div className="selectPage">
      <div className="search">
        <input
          type="text"
          placeholder="검색할 내용을 입력해주세요."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setFilter(board.filter((data) => data.content.includes(search)));
          }}
        >
          검색
        </button>
        <button
          onClick={() => {
            setFilter(board);
            setSearch("");
          }}
        >
          검색취소
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>내용</th>
            <th>작성자</th>
            <th>시간</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filter.map((data) => {
            return <SelectList key={data.id} {...data} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SelectPage;

import { useState } from "react";
import "./List.css";
import ListItem from "./ListItem";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const getFilter = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((item) => {
      return item.content.includes(search);
    });
  };
  return (
    <>
      <div className="list">
        <h4>Todo List🌞</h4>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          value={search}
          onChange={onChangeSearch}
        />
      </div>
      <div className="list">
        {getFilter().map((item) => {
          return (
            <ListItem
              key={item.id}
              {...item}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </>
  );
};

export default List;

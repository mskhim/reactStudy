import { useReducer, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import InsertPage from "./components/InsertPage";
import SelectPage from "./components/SelectPage";

function reducer(state, action) {
  switch (action.type) {
    case "DELETE":
      return state.filter((data) => {
        return data.id !== action.id;
      });
    case "UPDATE":
      return state.map((data) => {
        return data.id === action.id
          ? { ...data, content: action.content }
          : data;
      });
    case "INSERT":
      return [action.data, ...state];
    default:
      return state;
  }
}
function App() {
  const mockup = [
    {
      id: 0,
      name: "김민석",
      content: "내용입니다.",
      date: new Date().toDateString(),
    },
  ];
  const [board, dispatch] = useReducer(reducer, mockup);
  const ref = useRef(1);

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id: id,
    });
  };

  const onInsert = (name, content) => {
    dispatch({
      type: "INSERT",
      data: {
        id: ref.current++,
        name: name,
        content: content,
        date: new Date().toDateString(),
      },
    });
  };

  const onUpdate = (id, content) => {
    dispatch({
      type: "UPDATE",
      id: id,
      content: content,
    });
  };

  return (
    <div className="main">
      <Header />
      <InsertPage onInsert={onInsert} />
      <SelectPage board={board} onDelete={onDelete} onUpdate={onUpdate} />
    </div>
  );
}

export default App;

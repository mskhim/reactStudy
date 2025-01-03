import { Route, Routes } from "react-router-dom";
import "./App.css";
import Board from "./page/Board";
import Insert from "./page/Insert";
import Select from "./page/Select";
import Update from "./page/Update";
import { useReducer, createContext, useMemo, useRef } from "react";

export const boardContext = createContext();
export const dispatchContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "INSERT":
      return [action.data, ...state];
    case "DELETE":
      return state.filter((item) => item.id !== action.id);
    case "UPDATE":
      return state.map((item) =>
        item.id === action.data.id
          ? { ...item, content: action.content, title: action.title }
          : item
      );
    default:
      return state;
  }
}

function App() {
  const mockdata = [
    {
      id: 1,
      name: "김민석",
      title: "제목1",
      content: "내용1",
      password: "1234",
      date: "2021-09-01",
      rating: 3.0,
      ratingCount: 1,
    },
  ];
  const [board, dispatch] = useReducer(reducer, mockdata);

  const ref = useRef(0);

  //입력메소드
  const onInsert = (name, title, content, password) => {
    dispatch({
      type: "INSERT",
      data: {
        id: ref.current++,
        name: name,
        title: title,
        content: content,
        password: password,
        date: new Date().toLocaleDateString(),
        rating: 0.0,
        ratingCount: 0,
      },
    });
  };
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id: id,
    });
  };
  const onUpdate = (id, title, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id: id,
        title: title,
        content: content,
      },
    });
  };

  const memo = useMemo(() => {
    return { onInsert, onDelete, onUpdate };
  }, []);
  return (
    <>
      <boardContext.Provider value={board}>
        <dispatchContext.Provider value={memo}>
          <Routes>
            <Route path="/" element={<Board />} />
            <Route path="/insert" element={<Insert />} />
            <Route path="/select/:id" element={<Select />} />
            <Route path="/update" element={<Update />} />
          </Routes>
        </dispatchContext.Provider>
      </boardContext.Provider>
    </>
  );
}
export default App;

import "./App.css";
import Editer from "./components/Editer";
import Header from "./components/Header";
import List from "./components/List";
import { useState, useRef, useReducer } from "react";

//가상의 데이터(마운트시 서버에서 데이터를 가져온다. ajax이용)
const mockData = [
  {
    id: 0,
    isDone: false,
    content: "리엑트공부하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "스프링부트 공부하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "자바 공부하기",
    date: new Date().getTime(),
  },
];
function reducer(state, action) {
  switch (action.type) {
    case "INSERT":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((data) => {
        return data.id === action.targetId
          ? { ...data, isDone: !data.isDone }
          : data;
      });
    case "DELETE":
      return state.filter((data) => {
        return data.id !== action.targetId;
      });

    default:
      return state;
  }
}
function App() {
  // const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);
  const [todos, dispatch] = useReducer(reducer, mockData);
  //todo 추가할 레코드 처리하는 핸들러함수
  const onInsert = (data) => {
    dispatch({
      type: "INSERT",
      data: {
        id: idRef.current++,
        isDone: false,
        content: data,
        date: new Date().getTime(),
      },
    });
  };

  //수정할 레코드 처리하는 핸들러함수
  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  };

  //삭제할 레코드 처리하는 핸들러함수
  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  };
  return (
    <div className="app">
      <Header />
      <Editer onInsert={onInsert} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;

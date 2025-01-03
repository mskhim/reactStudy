import { useReducer, useRef, useCallback, createContext, useMemo } from "react";
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
//context
export const boardDispatchContext = createContext();
export const boardStateContext = createContext();

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

  //usecallback 사용시

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

  const memoDispatch = useMemo(() => {
    return { onInsert, onUpdate, onDelete };
  }, []);

  return (
    <div className="main">
      <Header />
      <boardStateContext.Provider value={board}>
        <boardDispatchContext.Provider value={memoDispatch}>
          <InsertPage />
          <SelectPage />
        </boardDispatchContext.Provider>
      </boardStateContext.Provider>
    </div>
  );
}

export default App;

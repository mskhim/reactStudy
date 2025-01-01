import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "PLUS":
      return state + action.data;
    case "MINUS":
      return state - action.data;
    default:
      return state;
  }
}

const Exam = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div className="exam">
      <h1>{state}</h1>
      <button
        onClick={() => {
          dispatch({ type: "PLUS", data: 1 });
        }}
      >
        {" "}
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "MINUS", data: 1 });
        }}
      >
        {" "}
        -
      </button>
    </div>
  );
};
export default Exam;

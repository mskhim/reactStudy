import { useEffect } from "react";

const CountButton = ({ setCount }) => {
  const onClick = (e) => {
    setCount(
      (data) =>
        (data =
          e.target.value === "0" ? 0 : data + parseInt([e.target.value], 10))
    );
  };

  return (
    <>
      <button onClick={onClick} value="-100">
        -100
      </button>
      <button onClick={onClick} value="-10">
        -10
      </button>
      <button onClick={onClick} value="0">
        0
      </button>
      <button onClick={onClick} value="10">
        10
      </button>
      <button onClick={onClick} value="100">
        100
      </button>
    </>
  );
};
export default CountButton;

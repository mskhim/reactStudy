import { useState } from "react";

function Button(props) {
  //내부함수를 정의한다.
  const [count, setCount] = useState("안녕하세요");
  const onClickButton = () => {
    setCount((value) => value + "2");
    alert(count);
  };

  return (
    <button style={{ color: props.color }} onClick={onClickButton}>
      {props.text}
    </button>
  );
}

Button.defaultProps = {
  text: "버튼",
  color: "green",
};
export default Button;

import { useState, useRef } from "react";

const Register = () => {
  const countRef = useRef(0);
  const inputRef = useRef();

  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    intro: "",
  });

  const onChange = (e) => {
    countRef.current++;
    setInput((data) => ({ ...data, [e.target.name]: e.target.value }));
  };
  const onSubmit = () => {
    if (input.name === "") {
      alert("이름값이 존재하지않습니다.");
      inputRef.current.focus();
    }
  };

  return (
    <>
      <h1>Register</h1>
      <form action="">
        <div>
          <input
            ref={inputRef}
            type="text"
            value={input.name}
            placeholder="이름"
            onChange={onChange}
            name="name"
          />
        </div>
        <div>
          <input
            type="date"
            value={input.birth}
            onChange={onChange}
            name="birth"
          />
        </div>
        <div>
          <select
            name="country"
            id="country"
            value={input.country}
            onChange={onChange}
          >
            <option value="kor">한국</option>
            <option value="ame">미국</option>
            <option value="jap">일본</option>
          </select>
        </div>
        <div>
          <textarea
            name="intro"
            id="intro"
            value={input.intro}
            onChange={onChange}
          ></textarea>
        </div>
        <button type="button" onClick={onSubmit}>
          제출
        </button>
      </form>
    </>
  );
};
export default Register;

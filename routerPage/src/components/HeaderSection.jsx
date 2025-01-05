import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeaderSection.css";
import Button from "./Button";

const HeaderSection = ({ b1, b2, onClick1, onClick2 }) => {
  const nav = useNavigate();
  return (
    <header className="header">
      <Button text={b1} onClick={onClick1} />
      <h1 className="header-title">게시판</h1>
      <div>{b2 === undefined || <Button text={b2} onClick={onClick2} />}</div>
    </header>
  );
};

export default HeaderSection;

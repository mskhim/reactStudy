import "./Header.css";
import Button from "./Button";
const Header = ({ bt1, onClick1, content, bt2, onClick2 }) => {
  return (
    <>
      <div className="header">
        <Button content={bt1} onClick={onClick1} />
        <h1>{content}</h1>
        <Button content={bt2} onClick={onClick2} />
      </div>
      <hr />
    </>
  );
};
export default Header;

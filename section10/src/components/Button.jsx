import "./Button.css";

const Button = ({ content, type, onClick }) => {
  return (
    <button onClick={onClick} className={`cbt cbt_${type}`}>
      {content}
    </button>
  );
};
export default Button;

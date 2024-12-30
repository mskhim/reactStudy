const CountButton = ({ setCount }) => {
  const onClick = (e) => {
    setCount((data) => (data = data + parseInt([e.target.name], 10)));
  };

  return (
    <>
      <button name="-100" onClick={onClick}>
        -100
      </button>
      <button name="-10" onClick={onClick}>
        -10
      </button>
      <button name="0" onClick={onClick}>
        0
      </button>
      <button name="10" onClick={onClick}>
        10
      </button>
      <button name="100" onClick={onClick}>
        100
      </button>
    </>
  );
};
export default CountButton;

const CalController = ({ setCount, setCal, count }) => {
  const onClick = (e) => {
    setCount((data) => (data = data + [e.target.value]));
    setCal(e.target.value);
    console.log(count);
  };

  const onCal = (e) => {
    let num = Function(`return ${count}`);
    setCal(num);
    setCount("");
  };
  return (
    <>
      <div>
        <button onClick={onClick} value="7">
          7
        </button>
        <button onClick={onClick} value="8">
          8
        </button>
        <button onClick={onClick} value="9">
          9
        </button>
        <button onClick={onClick} value="+">
          +
        </button>
      </div>
      <div>
        <button onClick={onClick} value="4">
          4
        </button>
        <button onClick={onClick} value="5">
          5
        </button>
        <button onClick={onClick} value="6">
          6
        </button>
        <button onClick={onClick} value="-">
          -
        </button>
      </div>
      <div>
        <button onClick={onClick} value="1">
          1
        </button>
        <button onClick={onClick} value="2">
          2
        </button>
        <button onClick={onClick} value="3">
          3
        </button>
        <button onClick={onClick} value="*">
          X
        </button>
      </div>
      <div>
        <button onClick={onClick} value="/">
          /
        </button>
        <button onClick={onCal} value="=">
          =
        </button>
      </div>
    </>
  );
};
export default CalController;

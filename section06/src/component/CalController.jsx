const CalController = ({ setCount, setCal, count, cal }) => {
  const onClick = (e) => {
    setCount(
      (data) => (data = e.target.value === "c" ? "" : data + [e.target.value])
    );
    const newValue = e.target.value;
    let view = newValue === "c" ? "" : cal + newValue;
    if (
      newValue === "*" ||
      newValue === "/" ||
      newValue === "-" ||
      newValue === "+"
    ) {
      view = "";
    }
    setCal(view);
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
        <button onClick={onCal} value="=">
          =
        </button>
        <button onClick={onClick} value="0">
          0
        </button>
        <button onClick={onClick} value="c">
          c
        </button>
        <button onClick={onClick} value="/">
          /
        </button>
      </div>
    </>
  );
};
export default CalController;

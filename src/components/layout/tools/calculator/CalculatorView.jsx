import { useState } from "react";

export const CalculatorView = () => {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          onClick={() => updateCalc(i.toString())}
          className="btn btn-primary"
          key={i}
        >
          {i}
        </button>
      );
    }

    return digits;
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteLast = () => {
    if (calc == "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  return (
    <div className="bg-white p-10">
      <div>
        <div>
          {result ? <span>({result})</span> : ""}
          {calc || "0"}
        </div>

        <div>
          <button onClick={() => updateCalc("/")} className="btn btn-primary">
            /
          </button>
          <button onClick={() => updateCalc("*")} className="btn btn-primary">
            *
          </button>
          <button onClick={() => updateCalc("+")} className="btn btn-primary">
            +
          </button>
          <button onClick={() => updateCalc("-")} className="btn btn-primary">
            -
          </button>

          <button onClick={deleteLast} className="btn btn-primary">DEL</button>
        </div>

        <div>
          {createDigits()}
          <button onClick={() => updateCalc("0")} className="btn btn-primary">
            0
          </button>
          <button onClick={() => updateCalc(".")} className="btn btn-primary">
            .
          </button>

          <button onClick={calculate} className="btn btn-primary">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

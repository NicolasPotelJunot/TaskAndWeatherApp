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
    <div className="flex justify-end items-center">
      <div className="bg-white rounded-xl px-10 py-14 w-2/3 mx-10">
        <div className="text-end text-5xl text-gray-600">
          {result ? <span>({result})</span> : ""}
          {calc || "0"}
        </div>

        <div className="grid grid-cols-4 gap-2 mt-10">
          <button onClick={()=>{setCalc(""); setResult("")}} className="btn btn-primary">C</button>

          <button onClick={() => updateCalc("*")} className="btn btn-primary">
            *
          </button>

          <button onClick={() => updateCalc("/")} className="btn btn-primary">
            /
          </button>

          <button onClick={() => updateCalc("-")} className="btn btn-primary">
            -
          </button>

          <button onClick={() => updateCalc("7")} className="btn btn-primary">
            7
          </button>

          <button onClick={() => updateCalc("8")} className="btn btn-primary">
            8
          </button>

          <button onClick={() => updateCalc("9")} className="btn btn-primary">
            9
          </button>

          <button onClick={() => updateCalc("+")} className="btn btn-primary">
            +
          </button>

          <button onClick={() => updateCalc("4")} className="btn btn-primary">
            4
          </button>

          <button onClick={() => updateCalc("5")} className="btn btn-primary">
            5
          </button>

          <button onClick={() => updateCalc("6")} className="btn btn-primary">
            6
          </button>

          <button
            onClick={calculate}
            className="bg-blue-400 text-3xl text-white font-bold row-span-3 rounded-lg"
          >
            =
          </button>

          <button onClick={() => updateCalc("1")} className="btn btn-primary">
            1
          </button>

          <button onClick={() => updateCalc("2")} className="btn btn-primary">
            2
          </button>

          <button onClick={() => updateCalc("3")} className="btn btn-primary">
            3
          </button>

          <button onClick={deleteLast} className="btn btn-primary">
            DEL
          </button>

          <button onClick={() => updateCalc("0")} className="btn btn-primary">
            0
          </button>
          <button onClick={() => updateCalc(".")} className="btn btn-primary">
            .
          </button>
        </div>

      </div>
    </div>
  );
};

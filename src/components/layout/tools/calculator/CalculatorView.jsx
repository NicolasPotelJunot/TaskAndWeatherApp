import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft , faX } from "@fortawesome/free-solid-svg-icons";

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
    <section className="rounded-xl flex mb-5 lg:mb-0 justify-center lg:justify-end items-center animate__animated animate__fadeIn">
      <div className="bg-white rounded-xl px-10 py-10 md:w-3/4 lg:w-96 md:mx-10 md:py-14">
        <div className="text-end text-5xl text-primary font-semibold w-full overflow-hidden">
          {result ? <span>({result})</span> : ""}
          {calc || "0"}
        </div>

        <div className="grid grid-cols-4 gap-2 mt-10">
          <button
            onClick={() => {
              setCalc("");
              setResult("");
            }}
            className="btn bg-btn-red text-xl border-none text-white"
          >
            C
          </button>

          <button onClick={() => updateCalc("*")} className="btn border-none bg-btn-gray text-white">
            <FontAwesomeIcon icon={faX} />
          </button>

          <button onClick={() => updateCalc("/")} className="btn border-none bg-btn-gray text-white">
            /
          </button>

          <button onClick={() => updateCalc("-")} className="btn border-none bg-btn-gray text-3xl text-white">
            -
          </button>

          <button onClick={() => updateCalc("7")} className="btn border-none bg-primary text-white">
            7
          </button>

          <button onClick={() => updateCalc("8")} className="btn border-none bg-primary text-white">
            8
          </button>

          <button onClick={() => updateCalc("9")} className="btn border-none bg-primary text-white">
            9
          </button>

          <button onClick={() => updateCalc("+")} className="btn border-none bg-btn-gray text-2xl text-white">
            +
          </button>

          <button onClick={() => updateCalc("4")} className="btn border-none bg-primary text-white">
            4
          </button>

          <button onClick={() => updateCalc("5")} className="btn border-none bg-primary text-white">
            5
          </button>

          <button onClick={() => updateCalc("6")} className="btn border-none bg-primary text-white">
            6
          </button>

          <button
            onClick={calculate}
            className="bg-btn-green text-3xl text-white font-bold row-span-3 rounded-lg"
          >
            =
          </button>

          <button onClick={() => updateCalc("1")} className="btn border-none bg-primary text-white">
            1
          </button>

          <button onClick={() => updateCalc("2")} className="btn border-none bg-primary text-white">
            2
          </button>

          <button onClick={() => updateCalc("3")} className="btn border-none bg-primary text-white">
            3
          </button>

          <button onClick={deleteLast} className="btn border-none bg-btn-red text-white">
           <FontAwesomeIcon icon={faDeleteLeft} />
          </button>

          <button onClick={() => updateCalc("0")} className="btn border-none bg-primary text-white">
            0
          </button>
          <button onClick={() => updateCalc(".")} className="btn border-none bg-primary text-white">
            .
          </button>
        </div>
      </div>
    </section>
  );
};

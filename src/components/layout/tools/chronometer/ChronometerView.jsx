import { useEffect, useState } from "react";

export const ChronometerView = () => {
  const [time, setTime] = useState(0);
  const [timerOn, setTimeOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="bg-white w-full rounded-xl mb-4 h-32 flex">
      <div className="w-3/4 flex justify-center pb-3 items-center">
        <div className="text-7xl font-semibold">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span className="text-5xl">
            {("0" + ((time / 10) % 100)).slice(-2)}
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        {!timerOn && time === 0 && (
          <button className="w-24 py-2 m-1 bg-blue-400 text-white rounded-xl" onClick={() => setTimeOn(true)}>
            start
          </button>
        )}

        {timerOn && (
          <button className="w-24 py-2 m-1 bg-blue-400 text-white rounded-xl" onClick={() => setTimeOn(false)}>
            stop
          </button>
        )}

        {!timerOn && time !== 0 && (
          <button className="w-24 py-2 m-1 bg-blue-400 text-white rounded-xl" onClick={() => setTimeOn(true)}>
            Resume
          </button>
        )}

        <button className="w-24 py-2 m-1 bg-blue-400 text-white rounded-xl" onClick={() => setTime(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

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
    <div className="bg-black">
      <div>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        {!timerOn && time === 0 && (
          <button onClick={() => setTimeOn(true)}>start</button>
        )}

        {timerOn && <button onClick={() => setTimeOn(false)}>stop</button>}

        {!timerOn && time !== 0 && (
          <button onClick={() => setTimeOn(true)}>Resume</button>
        )}

        {!timerOn && time > 0 && (
          <button onClick={() => setTime(0)}>Reset</button>
        )}
      </div>
    </div>
  );
};

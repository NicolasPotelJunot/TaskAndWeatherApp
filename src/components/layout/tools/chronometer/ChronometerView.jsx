import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faArrowRotateLeft,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
import "../../../../styles/generalStyles.css";

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
    <div className="bg-white w-full rounded-xl px-10 mb-4 h-32 flex animate__animated animate__fadeIn">
      <div className="w-3/4 flex justify-center pb-3 pr-3 items-center">
        <div className="text-5xl 2xl:text-7xl font-semibold text-primary">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span className="text-2xl md:text-5xl">
            {("0" + ((time / 10) % 100)).slice(-2)}
          </span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        {!timerOn && time === 0 && (
          <button
            className="btn border-none w-14 md:w-20 m-1 bg-btn-green text-white rounded-xl"
            onClick={() => setTimeOn(true)}
          >
            <FontAwesomeIcon icon={faPlay} />
          </button>
        )}

        {timerOn && (
          <button
            className="btn border-none w-14 md:w-20 m-1 bg-btn-red text-white rounded-xl"
            onClick={() => setTimeOn(false)}
          >
            <FontAwesomeIcon icon={faPause} />
          </button>
        )}

        {!timerOn && time !== 0 && (
          <button
            className="btn border-none w-14 md:w-20 m-1 bg-btn-green text-white rounded-xl"
            onClick={() => setTimeOn(true)}
          >
            <FontAwesomeIcon icon={faPlay} />
          </button>
        )}

        <button
          className="btn border-none w-14 md:w-20 m-1 bg-primary text-white rounded-xl"
          onClick={() => setTime(0)}
        >
          <FontAwesomeIcon icon={faArrowRotateLeft} />
        </button>
      </div>
    </div>
  );
};

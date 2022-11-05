import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activationMenu } from "../../../stateManagement/slicers/menuSlice";
import "./buttonMenu.css";

export const ButtonMenu = () => {
  const selector = useSelector((state) => state.menu.activation);
  const dispatch = useDispatch();

  const [active, setActive] = useState("");

  useEffect(() => {
    if (selector) {
      setActive("is-active");
    } else {
      setActive("");
    }
  }, [selector]);

  const handleMenu = () => {
    dispatch(activationMenu(true));
  };

  return (
    <div className="lg:hidden fixed z-20 w-20 pl-8 pt-2 pb-5 pr-14 flex justify-center items-center bg-white rounded-br-full">
      <button
        onClick={handleMenu}
        className={`hamburger hamburger--collapse ${active}`}
        type="button"
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>
  );
};

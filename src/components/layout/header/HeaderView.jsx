import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activationMenu } from "../../../stateManagement/slicers/menuSlice";
import { ButtonMenu } from "./ButtonMenu";
import { DateToday } from "./DateToday";
import { LinkNav } from "./LinkNav";
import "./headerView.css";

export const HeaderView = () => {

  const selector = useSelector((state) => state.menu.activation);
  const dispatch = useDispatch();

  const [isActive, setIsActive] = useState("inactiveMenu");

  useEffect(() => {
    if (selector) {
      setIsActive("activeMenu");
    } else {
      setIsActive("inactiveMenu");
    }
  }, [selector]);

  const handleMenu = () => {
    dispatch(activationMenu(true));
  };

  return (
    <header className="z-10">
      <ButtonMenu />
      <div className={`flex flex-col justify-between items-center pt-20 md:pt-10 border-r-2 w-40 fixed h-screen bg-white ${isActive}`}>
        <div className="w-full">
          <div className="px-5">
            <img
              src="../../public/logo.svg"
              alt="logo NikAgenda"
              className="w-24"
            />
            <DateToday />
          </div>
          <div className="grid mt-10">
            <LinkNav text={"tareas"} />
            <LinkNav text={"clima"} />
            <LinkNav text={"herramientas"} />
          </div>
        </div>
      </div>
    </header>
  );
};

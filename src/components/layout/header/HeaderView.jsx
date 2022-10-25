import { DateToday } from "./DateToday";
import { LinkNav } from "./LinkNav";

export const HeaderView = () => {
  return (
    <header className="z-10 flex flex-col justify-between items-center h-screen pt-14 bg-white border-r-2">
      <div className="w-full">
        <div className="px-5">
          <img
            src="../../public/logo.svg"
            alt="logo nicolas potel junot"
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
    </header>
  );
};

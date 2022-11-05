import { CalculatorView } from "./calculator/CalculatorView";
import { CalendarView } from "./calendar/CalendarView";
import { ChronometerView } from "./chronometer/ChronometerView";

export const ToolsView = () => {
  return (
    <div className="pb-10 pt-24 sm:pt-10 lg:p-0 lg:h-screen md:w-screen flex justify-center mx-auto">
      <div className="grid lg:grid-cols-2 md:w-2/3 justify-center mx-auto md:h-full">
        <CalculatorView />
        <div className="flex flex-col justify-center md:px-10">
          <ChronometerView />
          <CalendarView />
        </div>
      </div>
    </div>
  );
};

import { CalculatorView } from "./calculator/CalculatorView";
import { CalendarView } from "./calendar/CalendarView";
import { ChronometerView } from "./chronometer/ChronometerView";

export const ToolsView = () => {
  return (
    <div className=" h-screen w-screen">
      <div className="grid grid-cols-2 w-2/3 mx-auto h-full">
        <CalculatorView />
        <div className="flex flex-col justify-center px-10">
          <ChronometerView />
          <CalendarView />
        </div>
      </div>
    </div>
  );
};

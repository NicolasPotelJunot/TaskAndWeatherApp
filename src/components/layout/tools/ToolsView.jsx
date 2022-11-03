import { CalculatorView } from "./calculator/CalculatorView";
import { CalendarView } from "./calendar/CalendarView";
import { ChronometerView } from "./chronometer/ChronometerView";

export const ToolsView = () => {
  return (
    <div className="w-full">
      <CalendarView />
      <CalculatorView />
      <ChronometerView />
    </div>
  );
};

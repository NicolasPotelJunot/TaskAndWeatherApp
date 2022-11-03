import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { useState } from "react";

const isWeekend = (date) => {
  const day = date.day();

  return day === 0 || day === 6;
};

export const CalendarView = () => {
  const [value, setValue] = useState(Dayjs);

  return (
    <div className="w-1/3 h-1/2">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDatePicker
        displayStaticWrapperAs="desktop"
          orientation="landscape"
          openTo="day"
          value={value}
          shouldDisableDate={isWeekend}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
};

import { data } from "./database/data";
import { DateShiftType } from "./database/models/date";
import { ShiftType } from "./database/models/shift";

export const readAllShiftsInDate = (date: string): DateShiftType | undefined =>
  data.find((d) => d.date == date);

export const addShift = (
  date: string,
  name: string,
  startTime: string,
  endTime: string
) => {
  const shiftDetail: ShiftType = {
    id: "s_" + Math.round(1000000 * Math.random()).toString(),
    name,
    start_time: startTime,
    end_time: endTime,
  };

  const dateDetail: DateShiftType = {
    id: "d_" + Math.round(1000000 * Math.random()).toString(),
    date,
    shifts: [shiftDetail],
  };

  if (data.length === 0) {
    data.push(dateDetail);
    return;
  }

  const existedDate = data.find((d) => d.date == date);
  existedDate ? existedDate.shifts.push(shiftDetail) : data.push(dateDetail);
};

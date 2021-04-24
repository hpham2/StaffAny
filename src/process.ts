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
): DateShiftType => {
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

  const existedDate = data.find((d) => d.date == date);

  if (existedDate) {
    existedDate.shifts.push(shiftDetail);
    return existedDate;
  } else {
    data.push(dateDetail);
    return dateDetail;
  }
};

export const deleteShift = (id: string): DateShiftType | undefined => {
  const dateContainDeletedShift = data.find((d) =>
    d.shifts.find((s) => s.id === id)
  );

  if (!dateContainDeletedShift) return;

  const indexDeletedShift = dateContainDeletedShift.shifts.findIndex(
    (e) => e.id === id
  );
  dateContainDeletedShift.shifts.splice(indexDeletedShift, 1);

  return dateContainDeletedShift;
};

export const editShift = (
  id: string,
  name: string,
  startTime: string,
  endTime: string
): DateShiftType | undefined => {
  const dateContainEditShift = data.find((d) =>
    d.shifts.find((s) => s.id === id)
  );

  if (!dateContainEditShift) return;

  const indexEditShift = dateContainEditShift.shifts.findIndex(
    (e) => e.id === id
  );

  dateContainEditShift.shifts[indexEditShift] = {
    id,
    name,
    start_time: startTime,
    end_time: endTime,
  };

  return dateContainEditShift;
};

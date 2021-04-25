import { data } from "./database/data";
import { DateShiftType } from "./database/models/date";
import { ShiftType } from "./database/models/shift";

// @desc     Return all shifts in the requested date
export const readAllShiftsInDate = (date: string): DateShiftType | undefined =>
  data.find((d) => d.date == date);

// @desc     Add a new shift
// @return   A date containing added shift
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

// @desc     Delate a shift
// @return   A date containing deleted shift
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

// @desc     Modify existing shift
// @return   A date containing modified shift
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

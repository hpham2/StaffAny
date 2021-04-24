import { ShiftType } from "./shift";

export type DateShiftType = {
  id: string;
  date: string;
  shifts: [ShiftType];
};

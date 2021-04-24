import { data } from "./database/data";

export const readAllShiftsInDate = (date: string) =>
  data.find((d) => d.date === date);

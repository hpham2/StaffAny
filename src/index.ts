import express from "express";
import { addShift, readAllShiftsInDate } from "./process";

const app = express();

// app.get("/", (req, res) => {
//   res.send("Hai und Yen, Wir sind toll! Wowhoooo!!");
// });

app.get("/:date", (req, res) => {
  const allShiftsInDate = readAllShiftsInDate(req.params.date);
  allShiftsInDate
    ? res.send(allShiftsInDate)
    : res.send("No shift in this date");
});

app.post("/add/:date/:name/:startTime/:endTime", (req, res) => {
  addShift(
    req.params.date,
    req.params.name,
    req.params.startTime,
    req.params.endTime
  );
  res.send("ok");
});

app.listen(3000, () => {
  console.log("The application is listening on port 3000!");
});

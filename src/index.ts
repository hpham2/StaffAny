import express from "express";
import {
  addShift,
  deleteShift,
  editShift,
  readAllShiftsInDate,
} from "./process";

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
  const updatedDate = addShift(
    req.params.date,
    req.params.name,
    req.params.startTime,
    req.params.endTime
  );
  res.send(updatedDate);
});

app.put("/edit/:id/:name/:startTime/:endTime", (req, res) => {
  const updatedDate = editShift(
    req.params.id,
    req.params.name,
    req.params.startTime,
    req.params.endTime
  );
  updatedDate ? res.send(updatedDate) : res.send("No shift found");
});

app.delete("/delete/:id", (req, res) => {
  const updatedDate = deleteShift(req.params.id);
  updatedDate ? res.send(updatedDate) : res.send("No shift found");
});

app.listen(3000, () => {
  console.log("The application is listening on port 3000!");
});

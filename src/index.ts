import express from "express";
import { readAllShiftsInDate } from "./readShifts";

const app = express();

// app.get("/", (req, res) => {
//   res.send("Hai und Yen, Wir sind toll! Wowhoooo!!");
// });

app.get("/:date", (req, res) => {
  const allShiftsInDate = readAllShiftsInDate(req.params.date);
  res.send(allShiftsInDate);
});

app.listen(3000, () => {
  console.log("The application is listening on port 3000!");
});

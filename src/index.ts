import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hai and Yen, Wir sind toll!!!!!");
});

app.listen(3000, () => {
  console.log("The application is listening on port 3000!");
});

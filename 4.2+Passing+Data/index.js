import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  let header = "Enter your name below";
  res.render("index.ejs", {
    title: header
  });
});

app.post("/submit", (req, res) => {
  let numberOfLetters = req.body["fName"].length + req.body["lName"].length;
  res.render("index.ejs", {
    letters: numberOfLetters
  });

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

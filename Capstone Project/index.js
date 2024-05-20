import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/create", (req, res) => {
    res.render("create.ejs");
});

app.post("/submit", (req, res) => {
    let h1Title = "Your post is created"
    res.render("create.ejs", {
        createdPostTitle: h1Title
    });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});
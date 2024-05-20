import express from 'express';

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const d = new Date("April 14, 2024");
    let day = d.getDay();
    let whatDay;
    let whatToDo;
    if (day === 6 || day === 0) {
        whatDay = "the weekend";
        whatToDo = "have fun"
    } else {
        whatDay = "a weekday";
        whatToDo = "work hard"
    }
    res.render("index.ejs",
        {
            dayOfTheWeek: whatDay,
            action: whatToDo
        });
});

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});
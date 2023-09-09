const express = require("express");
const app = express();
const port = 3000;

const headSetter = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Access-Control-Allow-Origin', '*')

    next()
}

app.use(headSetter)
app.get("/api", (req, res) => {
    let slack_name = req.query.slack_name
    let track = req.query.track

    let currentDate = new Date()
    let utc_time = currentDate.toISOString().slice(0, -5) + 'Z';
    const currentDayNumber = currentDate.getDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayName = daysOfWeek[currentDayNumber];

    const details = {
        "slack_name": `${slack_name}`,
        "current_day": `${currentDayName}`,
        "utc_time": `${utc_time}`,
        "track": `${track}`,
        "github_file_url": "https://github.com/emeralddd123/HNGx-stage-one/blob/main/app.js",
        "github_repo_url": "https://github.com/emeralddd123/HNGx-stage-one",
        "status_code": 200
    }
    res.status(200).json(details)
});

app.get("*", (req, res) => {
    res.status(404).json({ "error": "Page not found" })
})
app.listen(port, () => console.log(`App listening on port ${port}!`));

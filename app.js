const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    let slack_name = req.query.slack_name
    let track = req.query.track

    let date = new Date()

    res.status(200).json({
        "slack_name":`${slack_name}`,
        "current_day":"Thursday",
        "utc_time":`${date}`,
        "track":`${track}`,
        "github_file_url":"https://github.com/emeralddd123/HNGx-stage-one/blob/main/app.js",
        "github_repo_url":"https://github.com/emeralddd123/HNGx-stage-one",
        "status_code":200
    })
});
app.listen(port, () => console.log(`App listening on port ${port}!`));

# HNGx-stage-one

<h2>Objective</h2>
<p>Create and host an endpoint using any programming language of your choice.</p>
<p>The endpoint should take two GET request query parameters and return specific information in JSON format.</p>
<h3>Requirements</h3>
<p>The information required includes:</p>
<ol>
<li>Slack name</li>
<li>Current day of the week</li>
<li>Current UTC time (with validation of +/-2)</li>
<li>Track</li>
<li>The GitHub URL of the file being run</li>
<li>The GitHub URL of the full source code.</li>
<li>A  Status Code of Success</li>
</ol>

<h3>Result in JSON</h3>

<pre>
{
    "slack_name": "HNGx",
    "current_day": "Thursday",
    "utc_time": "2023-09-07T21:17:00Z",
    "track": "backend",
    "github_file_url": "https://github.com/emeralddd123/HNGx-stage-one/blob/main/app.js",
    "github_repo_url": "https://github.com/emeralddd123/HNGx-stage-one",
    "status_code": 200
}
</pre>


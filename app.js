var Youtube = require("youtube-api");
var logger = require("morgan");
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  var YT = Youtube.authenticate({
      type: "key", 
      key: "***REMOVED***"
  });

  Youtube.search.list({
    "part": "snippet",
    "channelId": "UCEjOSbbaOfgnfRODEEMYlCw",
    "order": "date",
    "type": "video"
  }, function(err, data) {
    if (err) {
      console.log("error:", err);
    }
    if (data) {
      console.log("description:", data.items[0].snippet.description);
      console.log("thumbnails:", data.items[0].snippet.thumbnails.high.url);
      console.log("video:", "http://youtube.com/watch?v="+data.items[0].id.videoId);
    }
    res.send("http://youtube.com/watch?v="+data.items[0].id.videoId);
  });
});

app.use(logger("dev"));

module.exports = app;

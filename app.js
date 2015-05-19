var logger = require("morgan");
var Youtube = require("youtube-api");
var express = require('express');
var app = express();
var cons = require('consolidate');
var when = require('when');
var _ = require('lodash/collection/forEach');

app.get('/', function(req, res) {
  res.send("Append the channel ID to the URL to generate the RSS feed");
});

app.get('/favicon*', function(req, res) {
  res.sendStatus(404);
});

function getChannelTitle(channelId) {
  return new Promise(function(resolve, reject) {
    Youtube.search.list({
      "part": "snippet",
      "channelId": channelId,
      "order": "date",
      "type": "channel"
    }, function(err, data) {
      if (err) {
        reject(err);
      }
      if (data) {
        resolve(data.items[0].snippet.title);
      }
    });
  });
}

function getChannelVideos(channelId) {
  return new Promise(function(resolve, reject) {
    Youtube.search.list({
      "part": "snippet",
      "channelId": channelId,
      "order": "date",
      "maxResults": 20,
      "type": "video"
    }, function(err, data) {
      if (err) {
        reject(err);
      }
      if (data) {
        resolve(data);
      }
    });
  });
}

app.get('/:channelId', function(req, res) {

  var rssObject = [];
  var rssTitle = '';

  Youtube.authenticate({
    type: "key", 
    key: "***REMOVED***"
  });

  getChannelTitle(req.params.channelId).then(function(response) {
    rssTitle = response;
  });

  getChannelVideos(req.params.channelId).then(function(response) {
    _(response.items, function(n, key) {
      var rssItem = {
        description: n.snippet.description,
        title: n.snippet.title,
        thumb: n.snippet.thumbnails.high.url,
        videoId: n.id.videoId
      };
      rssObject.push(rssItem);
    });
  }).then(function(response) {
    cons.handlebars('rss_template.hbs', { 
      channel: req.params.channelId,
      rss:rssObject,
      title:rssTitle
    }, function(err, html){
      if (err) throw err;
      res.set('Content-Type', 'text/xml');
      res.send(html);
    });
  });
});

app.use(logger("dev"));

module.exports = app;

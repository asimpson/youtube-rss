var logger = require("morgan");
var Youtube = require("youtube-api");
var express = require('express');
var app = express();
var cons = require('consolidate');
var when = require('when');
var sequence = require('when/sequence');
var _ = require('lodash/collection/forEach');
var routes = require('./components/routes.js');
var getChannelTitle = require('./api/getChannelTitle.js');
var getChannelVideos = require('./api/getChannelVideos.js');

Youtube.authenticate({
  type: "key", 
  key: "**REMOVED**"
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/favicon*', function(req, res) {
  res.sendStatus(404);
});

app.get('/feed/:channelId', function(req, res) {
  console.log(req.url);
  console.log(req.headers['user-agent']);
  var rssObject = [];
  var rssTitle = '';
  var todayDate = new Date().toUTCString();
  var dataObject = sequence([getChannelTitle, getChannelVideos], req.params.channelId);

  dataObject.then(function(response){
    rssTitle = response[0]

    _(response[1].items, function(n, key) {
      var date = new Date(n.snippet.publishedAt).toUTCString();
      var title = n.snippet.title.replace('&', '&amp;');
      var rssItem = {
        description: n.snippet.description,
        title: title,
        date: date,
        videoId: n.id.videoId
      };
      rssObject.push(rssItem);
    });
  })
  .then(function(response) {
    cons.handlebars('templates/rss_template.hbs', { 
      date: todayDate,
      channel: req.params.channelId,
      rss: rssObject,
      title: rssTitle
    }, function(err, html){
      if (err) throw err;
      res.set('Content-Type', 'text/xml');
      res.send(html);
    });
  });
});

app.use(routes());

app.use(logger("dev"));

module.exports = app;

var Youtube = require("youtube-api");
var when = require('when');

getChannelVideos = function (channelId) {
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

module.exports = getChannelVideos;

var Youtube = require("youtube-api");
var when = require('when');

getChannelID = function (query) {
  return new Promise(function(resolve, reject) {
    Youtube.channels.list({
      "part": "id",
      "forUsername": query,
      "maxResults": 1
    }, function(err, data) {
      if (err) {
        reject(err);
      }
      if (data) {
        if (data.items.length < 1) {
          Youtube.search.list({
            "part": "snippet",
            "channelId": query,
            "order": "date",
            "maxResults": 1,
            "type": "video"
          }, function(err, data) {
            if (err) {
              reject(err);
            }
            if (data) {
              if (data.pageInfo.totalResults > 0) {
                resolve(query);
              } else {
                reject(null);
              }
            }
          });
        } else {
          resolve(data.items[0].id);
        }
      }
    });
  });
}

module.exports = getChannelID;

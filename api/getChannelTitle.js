var Youtube = require("youtube-api");
var when = require('when');

getChannelTitle = function (channelId) {
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
        // TypeError: Cannot read property 'snippet' of undefined
        //     at /home/adam/apps/ytrss/api/getChannelTitle.js:16:30
        if (!data.items[0]) {
          console.log('no snippet', data);
        }
        resolve(data.items[0].snippet.title);
      }
    });
  });
}

module.exports = getChannelTitle;

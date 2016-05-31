var Router = require('react-router');
var React = require('react');
var RouteHandler = Router.RouteHandler;
var when = require('when');
var sequence = require('when/sequence');
var _ = require('lodash/collection/forEach');
var getChannelTitle = require('../api/getChannelTitle.js');
var getChannelVideos = require('../api/getChannelVideos.js');

FeedPreview = React.createClass({displayName: "feedPreview",
  statics: {
    fetchInfo: function(data) {
      var dataObject = sequence([getChannelTitle, getChannelVideos], data['id']);
      dataObject.then(function(response){
        return response;
      });
      return dataObject;
    }
  },
  render: function () {
    var title = this.props.feedPreview[0];
    var items = [];

    _(this.props.feedPreview[1].items, function(n, key){
      var title = n.snippet.title;
      var desc = n.snippet.description;
      var thumb = n.snippet.thumbnails['medium']['url'];
      var link = 'http://www.youtube.com/watch?v='+n.id.videoId;

      if (key <= 4) {
        items.push(
          React.createElement("li", {key: key, className: 'video-item'}, 
            React.createElement("a", {className: 'video-link', href: link}, 
              React.createElement("p", {className: 'video-title'}, title),
              React.createElement("img", {src: thumb})
            )
          )
        );
      }
    });
    return (
      React.createElement("div", {className: 'preview'},
        React.createElement("h1", null, "Feed Preview for "+title),
        React.createElement("p", null, "Subscribe via this link:"),
        React.createElement("a", {rel: 'alternate', type: 'application/rss+xml', className: 'rss-link', href: 'https://ytrss.co/feed/' + this.props.params['id']}, 'RSS Feed Link'),
        React.createElement("h2", null, "Recent Videos:"),
        React.createElement("ul", {className: 'video-list'},
          items
        )
      )
    );
  }
});

module.exports = FeedPreview;


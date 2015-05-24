var Router = require('react-router');
var React = require('react');
var parseId = require('../api/parseChannelId');
var RouteHandler = Router.RouteHandler;
var when = require('when');

FeedParser = React.createClass({displayName: "FeedParser",
  statics: {
    willTransitionTo: function (transition, params, query, callback) {
      parseId(query.search).then(function(response) {
        transition.redirect('/preview/'+response);
        callback();
      }, function(error) {
        if (error = null) {
          console.log("ID not valid");
        } else {
          console.log("Username not valid");
        }
      });
    }
  },
  render: function () {
    return (
      React.createElement("div", {className: 'preview'}, 'preview')
    );
  }
});

module.exports = FeedParser;


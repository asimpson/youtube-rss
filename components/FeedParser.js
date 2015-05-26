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
          transition.redirect('/?invalid-id');
          callback();
        } else {
          transition.redirect('/?invalid-username');
          callback();
        }
      });
    }
  },
  render: function () {
    return null;
  }
});

module.exports = FeedParser;


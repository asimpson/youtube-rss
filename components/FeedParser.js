var Router = require('react-router');
var React = require('react');
var RouteHandler = Router.RouteHandler;

FeedParser = React.createClass({displayName: "FeedParser",
  statics: {
    willTransitionTo: function (transition, params, query) {
      transition.redirect('/preview/butts');
    }
  },
  render: function () {
    return (
      React.createElement("div", {className: 'preview'}, 'preview')
    );
  }
});

module.exports = FeedParser;


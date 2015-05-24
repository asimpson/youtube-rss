var Router = require('react-router');
var React = require('react');
var RouteHandler = Router.RouteHandler;

FeedPreview = React.createClass({displayName: "feedPreview",
  render: function () {
    console.log(this.props.params['id']);
    return (
      React.createElement("div", {className: 'preview'}, 'preview')
    );
  }
});

module.exports = FeedPreview;


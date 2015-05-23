var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

Default = React.createClass({displayName: "Default",
  componentDidMount: function() {
  },
  componentWillUpdate: function() {
  },
  componentDidUpdate: function() {
  },
  render: function () {
    return (
      React.createElement("div", null, 
        React.createElement(RouteHandler)
      )
    );
  }
});

module.exports = Default;


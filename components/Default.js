var React = require('react');
var Router = require('react-router');
var Footer = require('./Footer');
var RouteHandler = Router.RouteHandler;

Default = React.createClass({displayName: "Default",
  render: function () {
    return (
      React.createElement("div", null, 
        React.createElement(RouteHandler, data=this.props.data),
        React.createElement(Footer)
      )
    );
  }
});

module.exports = Default;


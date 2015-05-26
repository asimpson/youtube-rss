var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

Default = React.createClass({displayName: "Default",
  render: function () {
    return (
      React.createElement("div", null, 
        React.createElement(RouteHandler, data=this.props.data)
      )
    );
  }
});

module.exports = Default;


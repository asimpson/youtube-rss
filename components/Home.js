var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

Home = React.createClass({displayName: "Home",
  componentDidMount: function() {
  },
  componentWillUpdate: function() {
  },
  componentDidUpdate: function() {
  },
  render: function () {
    return (
      React.createElement("div", null, 
        React.createElement("p", null, "Enter a channel name or ID in the box below:"), 
        React.createElement("input", {className: 'channel-input'}), 
        React.createElement("input", {type: 'submit', className: 'channel-submit'})
      )
    );
  }
});

module.exports = Home;

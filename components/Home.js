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
  statics: {
  },
  render: function () {
    return (
      React.createElement("form", {action: '/feed', 
        method: 'post',
        className: 'form-wrapper'}, 
        React.createElement("label", { className: 'channel-submit' }, 
          "Enter a Youtube channel name or ID"),
        React.createElement("input", {type: 'search', 
          className: 'channel-input', 
          name: 'search',
          required: 'true',
          placeholder: 'LastWeekTonight'}), 
        React.createElement("input", {type: 'submit', 
          className: 'channel-submit',
          value: 'Search'
        })
      )
    );
  }
});

module.exports = Home;

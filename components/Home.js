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
    if (this.props.query) {
      var reason = (Object.keys(this.props.query));

      switch (reason[0]) {
        case "invalid-username":
          var message = React.createElement("p", {className: 'message'}, "That username isn't valid. Try again?");
          break;
        case "invalid-id":
          var message = React.createElement("p", {className: 'message'}, "That channel ID isn't valid. Try again?");
          break;
        default:
          var message = null;
      }
        
    }
    return (
      React.createElement("div", {className: 'wrapper'},
        message,
        React.createElement("form", {action: '/parseFeed', 
          className: 'form-wrapper'}, 
          React.createElement("label", { className: 'channel-submit' }, 
            "Enter a Youtube channel name or ID"),
          React.createElement("div", { className: 'side-by-side--wrapper' },
            React.createElement("input", {type: 'text', 
              className: 'channel-input side-by-side side-by-side--major', 
              name: 'search',
              required: 'true',
              placeholder: 'LastWeekTonight'}), 
            React.createElement("span", { className: 'side-by-side side-by-side--minor' },
              React.createElement("input", {type: 'submit', 
                className: 'channel-submit',
                value: 'Go!'
              })
            )
          )
        ),
        React.createElement("div", { className: 'example'}, 
          React.createElement("h1", {}, 
            "Instructions:"),
          React.createElement("p", {}, 
            "Copy the channel name or ID out of the URL"),
          React.createElement("img", { src: '/public/img/username-or-id.jpg', 
            className: 'example-img', 
            alt: 'Image of youtube URL with ID and username highlighted'}
          )
        )
      )
    );
  }
});

module.exports = Home;

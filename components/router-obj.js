var React = require('react');;
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var Default = require('./Default.js');
var Home = require('./Home.js');
var FeedPreview = require('./FeedPreview.js');
var FeedParser = require('./FeedParser.js');

var routeObj = (
  React.createElement(Route, {name: "default", path: "/", handler: Default}, 
   React.createElement(Route, {name: "feedPreview", path: "/preview/:id", handler: FeedPreview}),
   React.createElement(Route, {name: "parseFeed", handler: FeedParser}),
   React.createElement(DefaultRoute, {name: 'default-route', handler: Home})
  )
);

module.exports = routeObj;

var React = require('react');;
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var routeObj = require('./router-obj.js');

clientRoute = function() {
  return Router.run(routeObj, Router.HistoryLocation, function (Handler, state) {
    var container = document.getElementById('app');
    React.render(React.createElement(Handler), container);
  });
};

clientRoute();

module.exports = clientRoute;



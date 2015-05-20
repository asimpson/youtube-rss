var React = require('react');;
var Router = require('react-router');
var cons = require('consolidate');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var routeObj = require('./router-obj.js');

routes = function() {
  return function(req, res) {
    Router.run(routeObj, req.path, function (Handler, state) {
      var markup = React.renderToString(React.createElement(Handler));
      cons.handlebars('templates/app.hbs', {html: markup}, function(err, html){
        if (err) throw err;
        res.send(html);
      });
    });
  };
};

module.exports = routes;

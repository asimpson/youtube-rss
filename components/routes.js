var React = require('react');;
var Router = require('react-router');
var cons = require('consolidate');
var routeObj = require('./router-obj.js');

routes = function() {
  //this is an express middleware, remember that
  return function(req, res) {

    var router = Router.create({
      onAbort: function (options) {
        res.redirect(302, options.to);
      },
      //req.originalUrl allows me suck in action params
      location: req.originalUrl,
      routes: routeObj
    });

    function routerCallback(Handler, state) {
      var markup = React.renderToString(React.createElement(Handler));
      cons.handlebars('templates/app.hbs', {html: markup}, function(err, html){
        if (err) throw err;
        res.send(html);
      });
    };

    router.run(routerCallback);
  };
};

module.exports = routes;

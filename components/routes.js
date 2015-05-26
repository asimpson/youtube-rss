var React = require('react');;
var Router = require('react-router');
var cons = require('consolidate');
var routeObj = require('./router-obj.js');
var resolveHash = require('when/keys').all;

routes = function() {
  //this is an express middleware, remember that
  return function(req, res) {

    var router = Router.create({
      onAbort: function (options) {
        res.redirect(303, options.to);
      },
      //req.originalUrl allows me suck in action params
      location: req.originalUrl,
      routes: routeObj
    });

    function routerCallback(Handler, state) {
      var promises = state.routes.filter(function (route) {
        return route.handler.fetchInfo;
      }).reduce(function (promises, route) {
        //promises is empty, route is iterator
        // reduce to a hash of `key:promise`
        promises[route.name] = route.handler.fetchInfo(state.params);
        return promises;
      }, {});
      resolveHash(promises).then(function (data) {
        var markup = React.renderToString(React.createElement(Handler, {data: data}));
        cons.handlebars('templates/app.hbs', {html: markup}, function(err, html){
          if (err) throw err;
          res.send(html);
        });
      });
    };

    router.run(routerCallback);
  };
};

module.exports = routes;

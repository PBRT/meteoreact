// LIBS
var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var routes = require('./config/route.js');

// Style
var Colors = require('./globals/colors.js');
require('./globals/global.css');

Meteor.startup(function() {

  var App = React.createClass({
    render() {
      var navbarComponent;
      var style = {
        height: '100%',
        backgroundColor: Colors.redDark,
      };
      if(this.props.path !== '/login') {
        var NavBar = require('./components/navbar/navbar.jsx')();
        navbarComponent = (<NavBar />);
        style.backgroundColor = Colors.white;
      }
      return (
        <div style={style}>
          {navbarComponent}
          <RouteHandler />
        </div>
      );
    }
  });


  Router.run(buildRoutes(App), Router.HistoryLocation, function (Handler, state) {
    React.render(<Handler path={state.pathname}/>, document.body);
  });

});

function buildRoutes(app) {
  var obj = routes.routes.map( route => {
    return (
      <Route
        name={route.name}
        handler={require(route.filePath)()}
        key={route.id}/>
    )
  });
  return (
    <Route name="app" path="/" handler={app}>
      {obj}
      <DefaultRoute handler={require(routes.defaultRoute.filePath)()}/>
    </Route>
  );
}

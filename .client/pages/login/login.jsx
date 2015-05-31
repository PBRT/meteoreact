module.exports = function() {
  var Router = require('react-router');
  var Navigation = require('react-router').Navigation;
  var Link = Router.Link;

  var React = require('react');
  var s = getStyle();

  return React.createClass({
    displayName: 'Login',
    mixins: [Navigation],
    login() {
      var self = this;
      Meteor.loginWithFacebook({
         requestPermissions: ['email']
       },
       function (error) {
         if (error) {
             return console.log(error);
         }
         self.transitionTo('home');
       })
    },
    render: function() {
      return (
        <div style={s.container}>
          <div style={s.title}>
            VOUCHERS
          </div>
          <div style={s.subtitle}>
            Discover - Like - Share - Save
          </div>
          <div
            style={s.button}
            onClick={this.login}
          > Login
          </div>
        </div>
      );
    },
  });
};

function getStyle() {
  return {
    container: {
      fontSize: 50,
      textAlign: 'center'
    },
    button: {
      fontSize: 20,
      margin: 'auto',
      marginTop: 30,
      padding: 15,
      backgroundColor: '#3B5998',
      cursor: 'pointer',
      color: 'white',
      borderRadius: 2,
      width: 200,
      textDecoration: 'none',
      display: 'block',
    },
    title: {
      paddingTop: 100,
      letterSpacing: '-2px',
      color: '#ffffff'
    },
    subtitle: {
      marginTop: -10,
      marginBottom: 50,
      letterSpacing: '-2px',
      color: '#ffffff',
      fontSize: 20
    },
  };
}

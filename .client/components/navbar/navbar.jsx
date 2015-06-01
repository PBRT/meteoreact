module.exports = function() {

  var React = require('react');
  var Colors = require('../../globals/colors.js');
  var Font = require('../../globals/font.js');
  var Sizing = require('../../globals/sizing.js');

  var Router = require('react-router');
  var { Route, DefaultRoute, RouteHandler, Link } = Router;
  var s = getStyle();

  return React.createClass({
    contextTypes: {
      router: React.PropTypes.func
    },
    displayName: 'NavBar',
    redirection() {
      this.context.router.transitionTo('login');
    },
    render: function() {
      var urlPic;

      if (Meteor.user()) {
        urlPic = 'http://graph.facebook.com/' + Meteor.user().services.facebook.id + '/picture';
      }

      // var img = url('../../assets/images/icons/hamburger.png');
      var url = require("../../assets/images/icons/hamburger.png");

      return (
        <div style={s.container}>
          <div style={s.hamburger}>
            <img style={s.image} src={url}/>
          </div>
          <div style={s.brand}>
            VOUCHER
          </div>
          <img style={s.fb} src={urlPic} onClick={this.redirection}/>
        </div>
      );
    },
  });

  function getStyle() {
    return {
      container: {
        width: '100%',
        height: 60,
        backgroundColor: Colors.redDark,
        color: Colors.white,
        boxShadow: '0 0 5px 1px rgba(0,0,0,0.4)'
      },
      brand: {
        fontSize: Font.fontXXL,
        marginLeft: Sizing.marginLG,
        paddingTop: Sizing.paddingLG,
        cursor: 'pointer',
        textAlign: 'center',
      },
      hamburger: {
        position: 'absolute',
        marginLeft: 20,
        marginTop: 15,
      },
      image: {
        width: 35,
        height: 30,
        cursor: 'pointer',
      },
      fb: {
        position: 'absolute',
        right: 20,
        top: 10,
        width: 40,
        borderRadius: 2,
        border: '2px solid white',
        cursor: 'pointer'
      }
    }
  }

};

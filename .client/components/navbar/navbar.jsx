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
    renderItems(items) {
      return items.map(item => {
        var boundClick = this.itemAction.bind(this, item.action);
        return (
          <div
            key={item.id}
            style={s.item}
            onClick={boundClick}>
              {item.name}
            </div>
        );
      });
    },
    itemAction(action) {
      this.context.router.transitionTo(action);
    },
    render: function() {
      var items =
      [
        {name: 'Log Out', action: 'login', id: 0},
        {name: 'Contact', action: 'contact', id: 1},
        {name: 'About', action: 'about', id: 2},
      ];

      return (
        <div style={s.container}>
          <div style={s.brand}>
            VOUCHER
          </div>
          {this.renderItems(items)}
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
        float: 'left',
        cursor: 'pointer',
      },
      item: {
        float: 'right',
        marginRight: 30,
        paddingTop: Sizing.paddingXXL,
        cursor: 'pointer',
      }
    }
  }

};

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
    displayName: 'Footer',
    renderItems(items) {
      return items.map((item,index) => {
        var boundClick = this.itemAction.bind(this, item.action);
        var stylus = _.clone(s.item);
        if (index === (items.length - 1)) {
          stylus.borderRight = 'none';
        }
        return (
          <div
            key={item.id}
            style={stylus}
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
        {name: 'Camera', action: 'home', id: 0},
        {name: 'Vouchers', action: 'vouchers', id: 1},
      ];

      return (
        <div style={s.container}>
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
        position: 'fixed',
        bottom: 0,
      },
      brand: {
        fontSize: Font.fontXXL,
        marginLeft: Sizing.marginLG,
        paddingTop: Sizing.paddingLG,
        float: 'left',
        cursor: 'pointer',
      },
      item: {
        paddingTop: Sizing.paddingXXL,
        cursor: 'pointer',
        display: 'inline-block',
        width: '50%',
        textAlign: 'center',
        height: '100%',
        borderRight: '1px solid white',
        boxSizing: 'border-box'
      }
    }
  }

};

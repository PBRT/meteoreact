module.exports = function() {

  var React = require('react');
  var s = getStyle();

  return React.createClass({
    displayName: 'About',
    render: function() {
      return (
        <div style={s.container}>
          ABOUT PAGE
        </div>
      );
    },
  });
};

function getStyle() {
  return {
    container: {
      margin: 40,
      fontSize: 50,
      textAlign: 'center'
    }
  };
}

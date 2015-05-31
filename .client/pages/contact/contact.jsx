module.exports = function() {

  var React = require('react');
  var s = getStyle();

  return React.createClass({
    displayName: 'Contact',
    render: function() {
      return (
        <div style={s.container}>
          CONTACT PAGE
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

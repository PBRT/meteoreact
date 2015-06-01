module.exports = function() {

  var React = require('react');
  require("../../node_modules/velocity-animate/velocity.js");
  require("../../node_modules/velocity-animate/velocity.ui.js");
  var s = getStyle();

  return React.createClass({
    displayName: 'Home',
    getInitialState() {
      return {step: 0}
    },
    sendPicture(val) {
      var self = this;
      $(React.findDOMNode(this.refs.container)).velocity({ opacity: 0 }, { duration: 500,complete: function(){
        self.setState({step: 1});
        $(React.findDOMNode(self.refs.container)).velocity({ opacity: 1 }, { duration: 500});
      }});
    },
    render: function() {

      var content;

      // First step
      if(this.state.step === 0) {
        content =  (
          <div>
            Selfie : you and your plate
            <div style={s.button} onClick={this.sendPicture}> Take a picture </div>
          </div>
        );
      }
       else if (this.state.step === 1) {
        var socialNetworks = [
          {name: 'facebook', icon: '../../assets/images/icons/facebook.png'},
          {name: 'twitter', icon: '../../assets/images/icons/twitter.png'},
          {name: 'instagram', icon: '../../assets/images/icons/instagram.png'}
        ];
        var facebook = require('../../assets/images/icons/facebook.png');
        var twitter = require('../../assets/images/icons/twitter.png');
        var instagram = require('../../assets/images/icons/instagram.png');
        // var bindClick = this.share.bind(this,)
        content =  (
          <div>
            On which media you want to share
            <div style={s.socialsContainer}>
              <img src={facebook} style={s.socialItem}/>
              <img src={twitter} style={s.socialItem}/>
              <img src={instagram} style={s.socialItem}/>
            </div>
          </div>
        );
      }
      return (
        <div>
          <div ref="container" style={s.container}>
            {content}
          </div>
        </div>
      );
    },
  });
};

function getStyle() {
  return {
    container: {
      opacity: 1,
      margin: 40,
      fontSize: 50,
      textAlign: 'center',
    },
    button: {
      fontSize: 20,
      margin: 'auto',
      marginTop: 30,
      padding: 15,
      backgroundColor: '#AA3E42',
      cursor: 'pointer',
      color: 'white',
      borderRadius: 2,
      width: 200,
      textDecoration: 'none',
      display: 'block',
    },
    socialsContainer: {
      marginTop: 30,
    },
    socialItem: {
      margin: '30px 20px',
      cursor: 'pointer',
      borderRadius: 2
    }
  };
}

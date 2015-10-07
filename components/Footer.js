var React = require('react');

Footer = React.createClass({displayName: "Footer",
  render: function () {
    var footerText = {  }
    return (
      React.createElement("footer", null, 
        React.createElement("p", { dangerouslySetInnerHTML: {
            __html: "Made with <span class='red'>&#x2764;</span> in Ohio. Hosted on <a href='https://chunkhost.com/r/46012'>Chunkhost</a>. Created with <a href='http://facebook.github.io/react/'>React</a>"
          }
        })
      )
    );
  }
});

module.exports = Footer;


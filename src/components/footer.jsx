import React, { Component } from "react";
class Footer extends Component {
  stickyFooter = {
    position: "fixed",
    left: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "#343a40",
    color: "#ffffff",
    textAlign: "center",
  };
  state = {};
  render() {
    return (
      <footer style={this.stickyFooter}>
        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="javascript:void(0)"> Vista India</a>
        </div>
      </footer>
    );
  }
}

export default Footer;

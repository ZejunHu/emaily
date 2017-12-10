import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import ProfileMenu from "./dropdown/ProfileMenu";
import LoginMenu from "./dropdown/LoginMenu";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li key="1">
            <LoginMenu />
          </li>
        );
      default:
        return (
          <li key="2">
            <ProfileMenu />
          </li>
        );
    }
  }

  render() {
    return (
      <nav className="light-blue darken-4">
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
            style={{ marginLeft: "10px" }}
          >
            Emaily
          </Link>
          <ul className="right" style={{ margin: "0 10px" }}>
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);

import React, { Component } from "react";
import { Dropdown, NavItem } from "react-materialize";
import { connect } from "react-redux";
import Payments from "../Payments";

class ProfileMenu extends Component {
  render() {
    return (
      <Dropdown
        style={{ margin: "60px 0 0 0" }}
        trigger={
          <a className="dropdown-button" href="#!">
            {this.props.auth.displayName}
            <i className="material-icons right">arrow_drop_down</i>
          </a>
        }
      >
        <NavItem href="#!">Credits: {this.props.auth.credits}</NavItem>
        <NavItem href="#!">
          <Payments />
        </NavItem>
        <NavItem divider />
        <NavItem href="/api/logout">Logout</NavItem>
      </Dropdown>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(ProfileMenu);

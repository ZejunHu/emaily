import React, { Component } from "react";
import { Dropdown, Button, NavItem } from "react-materialize";
import { connect } from "react-redux";

class DropdownMenu extends Component {
  render() {
    return (
      <Dropdown trigger={<Button>{this.props.auth.displayName}</Button>}>
        <NavItem>Credits: {this.props.auth.credits}</NavItem>
        <NavItem divider />
        <NavItem href="/api/logout">Logout</NavItem>
      </Dropdown>
    );
  }
}
/*
<li key="4" style={{ margin: "0 10px" }}>
  {this.props.auth.displayName}
</li>,
<li key="3" style={{ margin: "0 10px" }}>
  Credits: {this.props.auth.credits}
</li>,
<li key="2">
  <a href="/api/logout">Logout</a>
</li>*/

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(DropdownMenu);

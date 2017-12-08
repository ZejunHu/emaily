import React, { Component } from "react";
import { Dropdown } from "react-materialize";

class LoginMenu extends Component {
  render() {
    return (
      <Dropdown
        style={{ margin: "60px 0 0 0" }}
        trigger={
          <a className="dropdown-button" href="#!">
            Login With<i className="material-icons right">arrow_drop_down</i>
          </a>
        }
      >
        <li style={{ backgroundColor: "#dd4b39" }}>
          <a href="/auth/google" className="white-text">
            <i className="fa fa-google-plus" style={{ margin: "0 4px" }} />Google
          </a>
        </li>
        <li style={{ backgroundColor: "#3b5998" }}>
          <a href="/auth/facebook" className="white-text">
            <i
              className="fa fa-facebook-official"
              style={{ margin: "0 4px" }}
            />Facebook
          </a>
        </li>
      </Dropdown>
    );
  }
}

export default LoginMenu;

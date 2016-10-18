import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class App extends Component {

  render() {
    return <div>
      <Helmet title='Go + React + Redux = rocks!' />
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React-Bootstrap</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavItem eventKey={1} href="/">Home</NavItem>
          <NavItem eventKey={2} href="/todo">Todo</NavItem>
          <NavItem eventKey={2} href="/usage">Usage</NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </Navbar>

      {this.props.children}
    </div>;
  }

}

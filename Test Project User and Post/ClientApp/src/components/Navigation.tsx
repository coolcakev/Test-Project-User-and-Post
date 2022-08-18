import React from 'react'
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Nav
    >
      <Nav.Item>
        <Nav.Link >
          <Link to="/user">User</Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link >
          <Link to="/post">Post</Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation
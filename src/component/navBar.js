import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
export const NavBar = () => {
  return (
    <Menu>
      <Menu.Menu position="left">
        <Menu.Item ><Link to='/'>Home</Link></Menu.Item>
        <Menu.Item><Link to='/table'>Table</Link></Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default NavBar;
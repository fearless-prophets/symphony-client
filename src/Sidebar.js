import {
  DeviceHub,
  Home,
  LocalOffer,
  QueueMusic,
  Search,
} from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';

import logo from './images/logo.svg';
import SideBarOption from './SidebarOption';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <img src={logo} alt='' />
        <h1>Symphony</h1>
      </div>

      <hr />

      <div className='sidebar__options'>
        <Link to='/'>
          <SideBarOption title='Home' Icon={Home} />
        </Link>
        <Link to='/search'>
          <SideBarOption title='Search' Icon={Search} />
        </Link>
        <Link to='/tags'>
          <SideBarOption title='Tags' Icon={LocalOffer} />
        </Link>
        <Link to='/playlists'>
          <SideBarOption title='Playlists' Icon={QueueMusic} />
        </Link>
        <Link to='/smartPlaylists'>
          <SideBarOption title='Smart Playlists' Icon={DeviceHub} />
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;

import React from 'react';
import Body from './Body';
import Sidebar from './Sidebar';
import SongBar from './SongBar';

function Player({ spotify }) {
  return (
    <div className='player'>
      <Sidebar />
      <Body spotify={spotify} />
      <SongBar spotify={spotify} />
    </div>
  );
}

export default Player;

import { ArrowForward, KeyboardArrowDown } from '@material-ui/icons';
import React from 'react';
import Button from './Button';

function SmartPlaylists() {
  return (
    <div class='smartPlaylist'>
      <h1>Smart Playlists</h1>
      <div class='selectFilter'>
        Select Filter...
        <KeyboardArrowDown />
      </div>

      <div id='filterBox' class='listBox'></div>
      <div class='arrowCircle'>
        <ArrowForward />
      </div>
      <input id='newPlaylistName' placeholder='Playlist Name' />
      <div id='songBox' class='listBox'></div>
      <Button text='Send to Spotify' color='lightGray' className='sendBtn' />
    </div>
  );
}

export default SmartPlaylists;

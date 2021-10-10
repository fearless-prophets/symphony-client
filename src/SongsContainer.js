import React from 'react';

import SongRow from './SongRow';
import { useStateValue } from './StateProvider';

function SongsContainer({ playSong }) {
  const [{ tracks }] = useStateValue();

  const convert = (value) => {
    return `${Math.floor(value / 60000)}:${
      value % 60 ? (value % 60 < 10 ? `0${value % 60}` : value % 60) : '00'
    }`;
  };
  console.log('hello', tracks);
  return (
    <div className='songsContainer'>
      <div className='songsContainer__heading'>
        <h4>TITLE</h4>
        <h4>PLAYLISTS</h4>
        <h4>TAGS</h4>
        <h4>LENGTH</h4>
        <h4>DATE ADDED</h4>
        <h4>BPM</h4>
      </div>

      {tracks.map((track, index) => (
        <SongRow
          key={track.id}
          playSong={playSong}
          track={track}
          number={index + 1}
          image={track.album?.images[0].url}
          title={track.name}
          artist={
            track.artists && track.artists.length && track.artists[0].name
          }
          color='blue'
          length={convert(track.duration_ms)}
          date='10-2-2021'
          tempo={track.tempo}
        />
      ))}
    </div>
  );
}

export default SongsContainer;

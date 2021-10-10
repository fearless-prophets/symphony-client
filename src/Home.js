import React from 'react';
import SongsContainer from './SongsContainer';

function Home({ playSong }) {
  return (
    <div className='home'>
      <h1>All songs</h1>

      <SongsContainer playSong={playSong} />
    </div>
  );
}

export default Home;

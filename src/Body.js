import { Switch, Route } from 'react-router-dom';
import React from 'react';

import Home from './Home';
import Search from './Search';
import Tags from './Tags';
import Playlists from './Playlists';
import SmartPlaylists from './SmartPlaylists';
import { useStateValue } from './StateProvider';

function Body({ spotify }) {
  const [{ token }, dispatch] = useStateValue();

  const playSong = (id) => {
    spotify.setAccessToken(token);
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: 'SET_ITEM',
            item: r.item,
          });
          dispatch({
            type: 'SET_PLAYING',
            playing: true,
          });
        });
      });
  };

  return (
    <div className='body'>
      <Switch>
        <Route path='/' exact>
          <Home playSong={playSong} />
        </Route>
        <Route path='/search' component={Search} />
        <Route path='/tags' component={Tags} />
        <Route path='/playlists' component={Playlists} />
        <Route path='/smartPlaylists' component={SmartPlaylists} />
      </Switch>
    </div>
  );
}

export default Body;

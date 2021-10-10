import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import { getTokenFromResponse } from './spotify';
import { useStateValue } from './StateProvider';

import Landing from './pages/Landing';
import Player from './Player';

import db from './firebase';

const spotify = new SpotifyWebApi();

function App() {
  // const [tracks, setTracks] = useState([]);
  const [{ token }, dispatch] = useStateValue();

  // function objectListToDictById(objects) {
  //   return objects
  //     .filter((o) => o && o.id != null)
  //     .reduce((acc, o) => ((acc[o.id] = o), acc), {});
  // }

  // function getTracksFromPlaylists(tracks, playlists) {
  //   const tracksDict = objectListToDictById(tracks);
  //   // const playlistDict = objectListToDictById(playlists);
  //   const playlistTrackIds = Array.from(
  //     new Set(
  //       playlists.reduce((acc, current) => {
  //         return acc.concat(tracks.map((t) => t.id));
  //       }, [])
  //     )
  //   );
  //   return playlistTrackIds.map((x) => tracksDict[x]);
  // }

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = '';
    const _token = hash.access_token;

    const fetchTracks = async function () {
      const snapshot = await db.collection('tracks').get();
      return snapshot.docs.map((doc) => doc.data());
    };
    const fetchPlaylists = async function () {
      const snapshot = await db
        .collection('playlists')
        .where('owner.id', '==', 'reece.poulsen')
        .get();
      return snapshot.docs.map((doc) => doc.data());
    };
    fetchTracks().then((data) => {
      console.log(data);
      dispatch({
        type: 'SET_TRACKS',
        tracks: data,
      });
    });
    fetchPlaylists().then((data) => {
      console.log(data);
      dispatch({
        type: 'SET_PLAYLISTS',
        playlists: data,
      });
    });

    // fetch(res)
    //   .then((res) => res.json())
    //   .then((data) => setTracks(data));

    if (_token) {
      spotify.setAccessToken(_token);
      dispatch({
        type: 'SET_TOKEN',
        token: _token,
      });

      spotify.getMe().then((user) => {
        console.log('user', user);
        dispatch({
          type: 'SET_USER',
          user,
        });
      });
    }
  }, [token, dispatch]);

  return (
    <div className='App'>
      {token ? <Player spotify={spotify} /> : <Landing />}
    </div>
  );
}

export default App;

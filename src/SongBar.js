import React, { useEffect } from 'react';
import {
  PauseCircleOutline,
  PlayCircleFilled,
  Repeat,
  Shuffle,
  SkipNext,
  SkipPrevious,
} from '@material-ui/icons';

import { useStateValue } from './StateProvider';

function SongBar({ spotify }) {
  const [{ item, playing }, dispatch] = useStateValue();

  // useEffect(() => {
  //   spotify.getMyCurrentPlaybackState().then((res) => {
  //     console.log('songbar', res);

  //     dispatch({
  //       type: 'SET_PLAYING',
  //       playing: res.is_playing,
  //     });

  //     dispatch({
  //       type: 'SET_ITEM',
  //       item: res.item,
  //     });
  //   });
  // }, [spotify]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: 'SET_PLAYING',
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: 'SET_PLAYING',
        playing: true,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
    spotify.getMyCurrentPlayingTrack().then((res) => {
      dispatch({
        type: 'SET_ITEM',
        item: res.item,
      });
      dispatch({
        type: 'SET_PLAYING',
        playing: true,
      });
    });
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
    spotify.getMyCurrentPlayingTrack().then((res) => {
      dispatch({
        type: 'SET_ITEM',
        item: res.item,
      });
      dispatch({
        type: 'SET_PLAYING',
        playing: true,
      });
    });
  };

  return (
    <div className='songbar'>
      <div className='songbar__left'>
        <img className='songbar__albumLogo' src={item?.url} alt={item?.name} />

        {item ? (
          <div className='songbar__songInfo'>
            <h4>{item?.name}</h4>
            <p>{item?.artists[0].name}</p>
          </div>
        ) : (
          <div className='songbar__songInfo'>
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
      </div>

      <div className='songbar__right'>
        <Shuffle className='songbar__icon' />
        <SkipPrevious onClick={skipPrevious} className='songbar__icon' />
        {playing ? (
          <PauseCircleOutline
            onClick={handlePlayPause}
            fontSize='large'
            className='songbar__icon'
          />
        ) : (
          <PlayCircleFilled
            onClick={handlePlayPause}
            fontSize='large'
            className='songbar__icon'
          />
        )}

        <SkipNext onClick={skipNext} className='songbar__icon' />
        <Repeat className='songbar__green' />
      </div>
    </div>
  );
}

export default SongBar;

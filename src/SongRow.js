import React from 'react';
import { Edit, PlayArrow, QueueMusic } from '@material-ui/icons';

import SongInfo from './SongInfo';
import Button from './Button';

function SongRow({
  number,
  image,
  title,
  artist,
  color,
  length,
  date,
  tempo,
  track,
  playSong,
}) {
  return (
    <div className='songrow'>
      <div className='songrow__title'>
        <span onClick={() => playSong(track.id)}>
          <p>{number}</p> <PlayArrow />
        </span>

        <SongInfo image={image} title={title} artist={artist} />
      </div>

      <div className='songrow__playlists'>
        <QueueMusic className='songrow__playlists-icon' />
        <Button
          className='songrow__playlists-button'
          text='background'
          color={color}
        />
        <Button
          className='songrow__playlists-button'
          text='background'
          color={color}
        />
        <Button
          className='songrow__playlists-button'
          text='background'
          color={color}
        />
      </div>

      <div className='songrow__tags'>
        <Edit className='songrow__tags-icon' />
        <Button className='songrow__tags-button' text='tag1' color={color} />
        <Button className='songrow__tags-button' text='tag2' color={color} />
        <Button className='songrow__tags-button' text='tag3' color={color} />
      </div>

      <div className='songrow__length'>{length}</div>

      <div className='songrow__date'>{date}</div>

      <div className='songrow__tempo'>{tempo}</div>
    </div>
  );
}

export default SongRow;

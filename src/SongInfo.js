import React from 'react';

function SongInfo({ image, title, artist }) {
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  const newTitle = truncate(title, 15);

  return (
    <div className='songinfo'>
      <img src={image} alt={image} />

      <div className='songinfo__container'>
        <h4>{newTitle}</h4>

        <p>{artist}</p>
      </div>
    </div>
  );
}

export default SongInfo;

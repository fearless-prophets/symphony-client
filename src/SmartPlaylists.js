import { ArrowForward, KeyboardArrowDown } from '@material-ui/icons';
import React, { useState } from 'react';
import Button from './Button';
import { useStateValue } from './StateProvider';

function objectListToDictById(objects) {
  return objects
    .filter((o) => o && o.id != null)
    .reduce((acc, o) => ((acc[o.id] = o), acc), {});
}

function createSetLogicLibrary(info) {
  const playlistsDict = objectListToDictById(info.playlists);
  // Needed for tags
  // const tracksDict = objectListToDictById(info.tracks);

  const getTrackIdsFromPlaylist = (playlistId) => {
    if (playlistId in playlistsDict) {
      const tracks = playlistsDict[playlistId].tracks;
      const trackIds = tracks.map((p) => p.id);
      return trackIds;
    } else {
      return undefined;
    }
  };

  const performSetOperation = (playlistId1, playlistId2, func) => {
    const trackIds1 = new Set(getTrackIdsFromPlaylist(playlistId1));
    const trackIds2 = new Set(getTrackIdsFromPlaylist(playlistId2));
    return Array.from(func(trackIds1, trackIds2));
  };

  const innerJoinPlaylists = (playlistId1, playlistId2) => {
    return performSetOperation(playlistId1, playlistId2, intersection);
  };

  const unionPlaylists = (playlistId1, playlistId2) => {
    return performSetOperation(playlistId1, playlistId2, union);
  };

  const outerJoinPlaylists = (playlistId1, playlistId2) => {
    return performSetOperation(playlistId1, playlistId2, symmetricDifference);
  };

  const getAllFromFirstNoneFromSecondPlaylists = (playlistId1, playlistId2) => {
    return performSetOperation(playlistId1, playlistId2, difference);
  };

  return {
    innerJoinPlaylists,
    unionPlaylists,
    outerJoinPlaylists,
    getAllFromFirstNoneFromSecondPlaylists,
  };
}

function createSortLibrary(info) {
  const tracksDict = objectListToDictById(info.tracks);

  function sortTracksByAttributeAscending(trackIds, attribute) {
    const tracks = trackIds.map((t) => tracksDict[t]);
    return tracks.sort((a, b) => (a[attribute] > b[attribute] ? 1 : -1));
  }

  function sortTracksByAttributeDescending(trackIds, attribute) {
    const tracks = trackIds.map((t) => tracksDict[t]);
    return tracks.sort((a, b) => (a[attribute] < b[attribute] ? 1 : -1));
  }
  return {
    sortTracksByAttributeAscending,
    sortTracksByAttributeDescending,
  };
}

// "merge" both setA and setB
function union(setA, setB) {
  let _union = new Set(setA);
  for (let elem of setB) {
    _union.add(elem);
  }
  return _union;
}

// Inner join
function intersection(setA, setB) {
  let _intersection = new Set();
  for (let elem of setB) {
    if (setA.has(elem)) {
      _intersection.add(elem);
    }
  }
  return _intersection;
}

// Outer join both setA and setB
function symmetricDifference(setA, setB) {
  let _difference = new Set(setA);
  for (let elem of setB) {
    if (_difference.has(elem)) {
      _difference.delete(elem);
    } else {
      _difference.add(elem);
    }
  }
  return _difference;
}

//setA not setB
function difference(setA, setB) {
  let _difference = new Set(setA);
  for (let elem of setB) {
    _difference.delete(elem);
  }
  return _difference;
}

function SmartPlaylists() {
  const [currentCount, setCurrentCount] = useState(0);
  const [{ tracks, playlists }] = useStateValue();
  let state = 'union';
  let setLogicLibrary = createSetLogicLibrary({
    playlists,
    tracks,
  });
  function handleChange(event) {
    state = event.target.value;
  }

  function handleSubmit(event) {
    console.log(state);
    switch (state) {
      case 'union':
        setCurrentCount(
          setLogicLibrary.unionPlaylists(playlists[0].id, playlists[1].id)
            .length
        );
        break;
      case 'intersection':
        setCurrentCount(
          setLogicLibrary.innerJoinPlaylists(playlists[0].id, playlists[1].id)
            .length
        );
        break;
      case 'outerJoin':
        setCurrentCount(
          setLogicLibrary.outerJoinPlaylists(playlists[0].id, playlists[1].id)
            .length
        );
        break;
      case 'difference':
        setCurrentCount(
          setLogicLibrary.getAllFromFirstNoneFromSecondPlaylists(
            playlists[0].id,
            playlists[1].id
          ).length
        );
        break;
      default:
        console.log('unknown');
    }

    // console.log(event);
    // console.log('smart', playlists);
    // console.log('The number of tracks is' + tracks.length);
    // console.log('The number of playlists is' + playlists.length);
    event.preventDefault();
  }

  return (
    <div class='smartPlaylist'>
      <h1>Smart Playlists</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={state?.value} onChange={handleChange}>
            <option value='union'>Union</option>
            <option value='intersection'>Intersection</option>
            <option value='outerJoin'>Outer Join</option>
            <option value='difference'>Difference</option>
          </select>
        </label>
        <input type='submit' value='Submit' />
      </form>
      <div id='filterBox' class='listBox'></div>
      <div class='arrowCircle'>
        <ArrowForward />
      </div>
      <input id='newPlaylistName' placeholder='Playlist Name' />
      <div id='songBox'>{currentCount}</div>
      <Button text='Send to Spotify' color='lightGray' className='sendBtn' />
    </div>
  );
}

export default SmartPlaylists;

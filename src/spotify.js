export const authEndpoint = 'https://accounts.spotify.com/authorize';

// const clientId = 'cbd9e750b50d4eb5bbd079099b5a3493';
const clientId = '5dd2dda670184f4688b9eef425c31877';
const redirectUri = 'http://localhost:3000/';
const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
  'playlist-modify-private',
  'playlist-read-private',
  'user-library-modify',
  'user-library-read',
];

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) => {
      let parts = item.split('=');
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`;

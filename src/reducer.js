export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  tracks: [],
  playing: false,
  item: null,
  token:
    'BQAyyjg_8pGRnJ1zmn2j8pnB6Vh7dFXjUOuYoDOupXlI2Jqn3cJuBJXtzPD11t70sWvtCOMGqhVZrYsvsEBo6Zz72xaDrZxaE5mmfwRgPkGSFX017m7H6Xsf7bfSWYFd_bdinHB7Qy0jFtCqeovqPo0fqyo1YBRU9vDgeT6dh96xlmKsa9uZ',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_ITEM':
      return {
        ...state,
        item: action.item,
      };
    case 'SET_PLAYING':
      return {
        ...state,
        playing: action.playing,
      };
    case 'SET_SPOTIFY':
      return {
        ...state,
        spotify: action.spotify,
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_TRACKS':
      return {
        ...state,
        tracks: action.tracks,
      };
    default:
      return state;
  }
};

export default reducer;

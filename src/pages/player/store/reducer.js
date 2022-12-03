import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  currentSong: {
    name: '',
    id: '',
    ar: [{
      name: '',
    }],
    al: {
      picUrl: "https://s4.music.126.net/style/web2/img/default/default_album.jpg",
    },
    dt: '',
  },
  currentLyrics:  {},

  
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong)
    case actionTypes.CHANGE_LYRICS:
      return state.set("currentLyrics",action.currentLyrics)

    default:
      return state;
  }
}

export default reducer;
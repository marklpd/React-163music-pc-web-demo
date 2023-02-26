import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  playList: [],
  sequence: 0, // 0 顺序播放 1 随机播放 2 单曲循环
  currentSongIndex: 0,
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
  currentLyrics: [],
  currentLyricsIndex: 0,
  currentLyric: ''
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong)
    case actionTypes.CHANGE_LYRICS:
      return state.set("currentLyrics", action.currentLyrics)
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.currentSongIndex)
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList)
    case actionTypes.CHANGE_PLAY_SEQUENCE:
      return state.set("sequence", action.sequence)
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set("currentLyricsIndex", action.index)
    case actionTypes.CHANGE_CURRENT_LYRIC:
      return state.set("currentLyric", action.lyric)
    default:
      return state;
  }
}

export default reducer;
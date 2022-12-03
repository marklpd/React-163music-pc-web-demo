import * as actionTypes from './constants';

import { getSongDetail, getLyric } from '@/services/player';
import { parseLyric } from '@/utils/lrc-parse';

const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong
})

const changeLyricsAction = (currentLyrics) => ({
  type: actionTypes.CHANGE_LYRICS,
  currentLyrics
})

export const getSongDetailAction = (ids) => {
  return (dispatch,getState) => {
    getSongDetail(ids).then(res => {
      dispatch(changeCurrentSongAction(res.songs[0]))
    })

    // 获取当前的歌词,并且解析
    getLyric(ids).then(res => {
      const lrcString = res.lrc.lyric;
      const lyrics = parseLyric(lrcString);
      dispatch(changeLyricsAction(lyrics));
    });
  }
}
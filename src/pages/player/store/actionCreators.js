import * as actionTypes from './constants';

import { getSongDetail, getLyric } from '@/services/player';
import { parseLyric } from '@/utils/lrc-parse';

const changeCurrentSongAction = (currentSong) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong
})

export const changeCurrentSongIndexAction = (currentSongIndex) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex
})

const changeLyricsAction = (currentLyrics) => ({
  type: actionTypes.CHANGE_LYRICS,
  currentLyrics
})

export const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList
})
export const sortPlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList
})

export const changePlaySequenceAction = (currentSequence) => {
  if (currentSequence === 3) currentSequence = 0;
  return {
    type: actionTypes.CHANGE_PLAY_SEQUENCE,
    sequence: currentSequence
  }
}

export const changeCurrentLyricIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  index
})
export const changeCurrentLyricAction = (lyric) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC,
  lyric
})

export const changeCurrentIndexAndSongAction = (tag) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(["play", "playList"]);
    const sequence = getState().getIn(["play", "sequence"]);
    let currentSongIndex = getState().getIn(["play", "currentSongIndex"]);

    switch (sequence) {
      case 1: // 随机播放
        let randomIndex = Math.floor(Math.random() * playList.length);
        while (randomIndex == currentSongIndex) {
          randomIndex = Math.floor(Math.random() * playList.length);
        }
        currentSongIndex = randomIndex;
        break;
      default: // 顺序播放
        currentSongIndex += tag;
        if (currentSongIndex >= playList.length) currentSongIndex = 0;
        if (currentSongIndex < 0) currentSongIndex = playList.length - 1;
    }
    dispatch(changeCurrentSongIndexAction(currentSongIndex));
    dispatch(changeCurrentSongAction(playList[currentSongIndex]));

    dispatch(getLyricAction(playList[currentSongIndex].id));
  }
}

export const getSongDetailAction = (ids, key) => {
  return (dispatch, getState) => {
    // 1.判断是否歌曲存在playList中
    const playList = getState().getIn(["play", "playList"]);

    const songIndex = playList.findIndex(song => song.id === ids);
    if (songIndex != -1) { // 找到数据，直接修改
      const currentSong = playList[songIndex];
      dispatch(changeCurrentSongIndexAction(songIndex));
      dispatch(changeCurrentSongAction(currentSong));
      dispatch(getLyricAction(currentSong.id));
    } else { // 未找到数据，先发送网络请求
      getSongDetail(ids).then(res => {
        const song = res.songs && res.songs[0];
        if (!song) return;
        // 1.添加到playList中
        const newPlayList = [...playList];
        newPlayList.push(song);
        dispatch(changePlayListAction(newPlayList));
        // 2.修改当前歌曲
        if (key !== "add") {
          dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
          dispatch(changeCurrentSongAction(song));
        }

        // 3.获取当前的歌词,并且解析
        dispatch(getLyricAction(song.id));
      })
    }
  }
}

export const getLyricAction = (id) => {
  return dispatch => {
    getLyric(id).then(res => {
      const lrcString = res.lrc.lyric;
      const lyrics = parseLyric(lrcString);
      dispatch(changeLyricsAction(lyrics));
    });
  }
}
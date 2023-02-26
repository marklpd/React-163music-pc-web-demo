import React, { memo, useState, useEffect, useRef, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getSizeImage, formatMinuteSecond, getPlayUrl } from '@/utils/format-utils'
import {
  getSongDetailAction,
  changePlaySequenceAction,
  changeCurrentIndexAndSongAction,
  changeCurrentLyricIndexAction,
  changeCurrentLyricAction
} from '../store/actionCreators'
import AppPlayPanel from '../app-play-panel'
import LyricsShow from '@/components/lyrics-show'

import { Slider } from 'antd';
import {
  PlayBarWrapper,
  Control,
  PlayInfo,
  Operator
} from './style'

const AppPlayBar = memo(() => {
  // props and state
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const [playPanelShow, setPlayPanelShow] = useState(false);

  // redux hooks
  const dispatch = useDispatch();
  const {
    currentSong,
    sequence,
    playList,
    lyricsList,
    currentLyricsIndex,
    currentLyric } = useSelector((state) => ({
      currentSong: state.getIn(["play", "currentSong"]),
      sequence: state.getIn(["play", "sequence"]),
      playList: state.getIn(["play", "playList"]),
      lyricsList: state.getIn(["play", "currentLyrics"]),
      currentLyricsIndex: state.getIn(["play", "currentLyricsIndex"]),
      currentLyric: state.getIn(["play", "currentLyric"])
    }), shallowEqual);

  // other hooks
  const audioRef = useRef();

  useEffect(() => {
    dispatch(getSongDetailAction(1346170312))
  }, [dispatch]);

  // 当前歌曲改变
  useEffect(() => {
    audioRef.current.src = getPlayUrl(currentSong.id);
    isPlaying ? audioRef.current.play().then(res => {
      setIsPlaying(true);
    }).catch(err => {
      setIsPlaying(false);
    }) : audioRef.current.pause();
  }, [currentSong])

  // handle
  const duration = currentSong.dt || 0; // 歌曲总时间

  const showDuration = formatMinuteSecond(duration);

  // handle function
  const playMusic = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  }

  const timeUpdate = (e) => {
    const currentTime = e.target.currentTime; // s
    if (!isChanging) {
      setCurrentTime(currentTime * 1000);
      setProgress(currentTime * 1000 / duration * 100);
    }
    // 获取当前时间的歌词
    let i = 0
    for (; i < lyricsList.length; i++) {
      let lyricItem = lyricsList[i];
      if (currentTime * 1000 < lyricItem.time) {
        break;
      }
    }
    if (currentLyricsIndex != i - 1) { // 保存到redux中
      dispatch(changeCurrentLyricIndexAction(i - 1));
      const content = lyricsList[i - 1] && lyricsList[i - 1].content;
      dispatch(changeCurrentLyricAction(content));
    }
    if (currentTime == 0) {
      dispatch(changeCurrentLyricAction(''));
    }
  }

  const handleMusicEnded = () => {
    if (sequence === 2) { // 单曲循环
      setCurrentTime(0);
      audioRef.current.play();
    } else {
      dispatch(changeCurrentIndexAndSongAction(1))
    }
  }

  const sliderChange = useCallback((value) => { //  Slider 的值发生改变时，会触发 onChange 事件，并把改变后的值作为参数传入
    setIsChanging(true);
    setProgress(value);
  })

  const sliderAfterChange = useCallback((value) => {
    const currentTime = value / 100 * duration / 1000;
    audioRef.current.currentTime = currentTime;
    setCurrentTime(currentTime * 1000);
    setIsChanging(false);

    if (!isPlaying) {
      playMusic();
    }
  }, [duration, isPlaying, playMusic])

  const changeMusic = (tag) => { // 切换歌曲
    dispatch(changeCurrentIndexAndSongAction(tag))
  }

  const sequenceInfo = (sequence) => {
    switch (sequence) {
      case 1:
        return "随机";
      case 2:
        return "单曲循环";
      default:
        return "循环";
    }
  }

  return (
    <PlayBarWrapper className="sprite_playbar">
      <LyricsShow info={currentLyric} /> {/* 歌词显示组件 */}
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="pre sprite_playbar" title="上一首(ctrl+←)"
            onClick={() => { changeMusic(-1) }}></button>
          <button className="play sprite_playbar" title="播放/暂停(p)"
            onClick={() => playMusic()}></button>
          <button className="next sprite_playbar" title="下一首(ctrl+→)"
            onClick={() => { changeMusic(1) }}></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <img src={getSizeImage(currentSong.al.picUrl, 34)} alt="" />
            < NavLink to={`/discover/song?id=${currentSong.id}`} className="mask sprite_playbar"></ NavLink >
          </div>
          <div className="play">
            <div className="info">
              < NavLink to={`/discover/song?id=${currentSong.id}`} className="song-name">{currentSong.name}</ NavLink >
              <a className="singer-name">{currentSong.ar[0].name}</a>
              <a className="link sprite_playbar"></a>
            </div>
            <div className="progress">
              <Slider value={progress}
                step={0.01}
                tooltip={{ open: false }}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange} />
              <div className="time">
                <span className="now-time">{formatMinuteSecond(currentTime)}</span>
                <span className="divider">/</span>
                <span className="total-time">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="btn icn-pip"></button>
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="sprite_playbar btn volume"></button>
            <button className="sprite_playbar btn loop"
              onClick={() => dispatch(changePlaySequenceAction(sequence + 1))}
              title={sequenceInfo(sequence)}></button>
            <span className="add" onClick={() => setPlayPanelShow(!playPanelShow)}>
              <button className="sprite_playbar btn playlist">{playList.length}</button>
            </span>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef}
        onTimeUpdate={e => timeUpdate(e)}
        onEnded={e => handleMusicEnded()} />
      <AppPlayPanel playPanelShow={playPanelShow} />
    </PlayBarWrapper>
  )
})

export default AppPlayBar
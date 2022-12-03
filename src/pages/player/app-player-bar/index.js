import React, { memo, useState, useEffect, useRef, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getSizeImage, formatMinuteSecond, getPlayUrl } from '@/utils/format-utils'
import {
  getSongDetailAction
} from '../store/actionCreators'

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

  // redux hooks
  const dispatch = useDispatch();
  const { currentSong } = useSelector((state) => ({
    currentSong: state.getIn(["play", "currentSong"])
  }), shallowEqual);

  // other hooks
  useEffect(() => {
    dispatch(getSongDetailAction(109198))
  }, [dispatch]);

  useEffect(() => {
    audioRef.current.src = getPlayUrl(currentSong.id);
  }, [currentSong])


  const audioRef = useRef();

  // handle
  const duration = currentSong.dt || 0;

  const showDuration = formatMinuteSecond(duration); // 歌曲总时间
  // const showCurrentTime = formatMinuteSecond(currentTime);

  // handle function
  const playMusic = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  }

  const timeUpdate = (e) => {
    if (!isChanging) {
      setCurrentTime(e.target.currentTime * 1000);
      setProgress(currentTime / duration * 100);
    }
  }

  const sliderChange = useCallback((value) => {
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

  return (
    <PlayBarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="pre sprite_playbar" title="上一首(ctrl+←)"></button>
          <button className="play sprite_playbar" title="播放/暂停(p)" onClick={() => playMusic()}></button>
          <button className="next sprite_playbar" title="下一首(ctrl+→)"></button>
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
        <Operator>
          <div className="left">
            <button className="btn icn-pip"></button>
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="sprite_playbar btn volume"></button>
            <button className="sprite_playbar btn loop"></button>
            <span className="add">
              <button className="sprite_playbar btn playlist">1</button>
            </span>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate} />
    </PlayBarWrapper>
  )
})

export default AppPlayBar
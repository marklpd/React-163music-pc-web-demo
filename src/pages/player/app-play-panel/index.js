import React, { memo } from 'react';
import { shallowEqual, useSelector } from 'react-redux';

import PlayHeader from './c-cpns/play-header';
import PlayList from './c-cpns/play-list';
import LyricPanel from './c-cpns/lyric-panel';
import { PanelWrapper } from './style';

export default memo(function AppPlayList(props) {
  const { currentSong } = useSelector((state) => ({
    currentSong: state.getIn(["play", "currentSong"]),
  }), shallowEqual);

  return (
    <PanelWrapper style={{ display: (props.playPanelShow ? 'block' : 'none') }}>
      <PlayHeader />
      <div className="main">
        <img className="image" src={currentSong.al.picUrl} alt="" />
        <PlayList />
        <LyricPanel />
      </div>
    </PanelWrapper>
  )
})

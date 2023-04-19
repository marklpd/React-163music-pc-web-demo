import React, { memo, useState, useLayoutEffect } from 'react'
import { useSelector, shallowEqual } from 'react-redux';
import { getSongDetail, getLyric } from '@/services/player';
import { parseLyric } from '@/utils/lrc-parse';

import { getSizeImage } from '@/utils/format-utils'
import SongOperationBar from '@/components/song-operation-bar';

import {
  InfoWrapper,
  InfoLeft,
  InfoRight
} from './style';

const PlayerInfo = memo((props) => {
  const [isSpread, setIsSpread] = useState(false);
  let currentSong, currentLyrics;

  useLayoutEffect(() => {
    getSongDetail(props.id).then(res => {
      currentSong = res.songs[0];
      console.log(currentSong);
    })
    getLyric(props.id).then(res => {
      const lrcString = res.lrc.lyric;
      currentLyrics = parseLyric(lrcString);
    })
  })

  // redux hook
  // const { currentSong, currentLyrics } = useSelector(state => ({
  //   currentSong: state.getIn(["play", "currentSong"]),
  //   currentLyrics: state.getIn(["play", "currentLyrics"])
  // }), shallowEqual);

  const totalLyricCount = isSpread ? currentLyrics.length : 13;

  return (
    <InfoWrapper>
      <InfoLeft>
        <div className="image">
          <img src={getSizeImage(currentSong.al.picUrl, 130)} />
          <span className="cover image_cover"></span>
        </div>
        <div className="link">
          <i className="sprite_icon2"></i>
          <a href="#/">生成外联播放器</a>
        </div>
      </InfoLeft>
      <InfoRight isSpread={isSpread}>
        <div className="header">
          <i className="sprite_icon2"></i>
          <div className="info">
            <h3 className="title">{currentSong.name}</h3>
            <span>{currentSong.alia[0]}</span>
          </div>
        </div>
        <div className="singer">
          <span className="label">歌手：</span>
          <a href="/#" className="name">{currentSong.ar[0].name}</a>
        </div>
        <div className="album">
          <span className="label">所属专辑：</span>
          <a href="/#" className="name">{currentSong.al.name}</a>
        </div>

        <SongOperationBar favorTitle="收藏"
          shareTitle="分享"
          downloadTitle="下载"
          commentTitle="(167366)" />

        <div className="lyric">
          <div className="lyric-info">
            {
              currentLyrics.slice(0, totalLyricCount).map((item) => {
                return <p key={item.time} className="text">{item.content}</p>
              })
            }
          </div>
          <a className="lyric-control"
            onClick={() => setIsSpread(!isSpread)}>
            {isSpread ? "收起" : "展开"}
            <i className="sprite_icon2"></i>
          </a>
        </div>
      </InfoRight>
    </InfoWrapper>
  )
})

export default PlayerInfo

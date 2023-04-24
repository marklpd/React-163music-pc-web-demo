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
  const [loading, setLoading] = useState(true);
  const [currentSong, setCurrentSong] = useState({
    name: "借月留光",
    al: { id: 75559653, name: "青云不坠", picUrl: "https://p2.music.126.net/HLt4LAER5LElWqD52971Eg==/109951163864385665.jpg" },
    ar: [{id: 12194600, name: "小坠"}],
    alia: []
  });
  const [currentLyrics, setCurrentLyrics] = useState();

  useLayoutEffect(() => {
    getSongDetail(props.id).then(res => {
      setCurrentSong(res.songs[0]);
    })
    getLyric(props.id).then(res => {
      setCurrentLyrics(parseLyric(res.lrc.lyric));
      setLoading(false)
    })
  }, [props])

  const totalLyricCount = isSpread ? currentLyrics.length : 13;

  return (
    <>
      {loading ? <h2> loading</h2 > :
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
                  currentLyrics.slice(0, totalLyricCount).map((item, index) => {
                    return <p key={index} className="text">{item.content}</p>
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
        </InfoWrapper>}
    </>
  )
})

export default PlayerInfo

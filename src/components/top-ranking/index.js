import React, { memo } from 'react'
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getSongDetailAction } from '@/pages/player/store';
import { getSizeImage } from '@/utils/format-utils'

import {
  TopRankingWrapper
} from './style'

const TopRanking = memo((props) => {
  const { info } = props;
  const { tracks = [] } = info;

  const dispatch = useDispatch();

  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id));
  }

  const addMusic = (item) => {
    dispatch(getSongDetailAction(item.id, "add"));
  }

  return (
    <TopRankingWrapper>
      <dt className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl, 80)}></img>
          <a href="https://music.163.com/discover/toplist?id=19723756" className="image_cover" title="{info.name}"></a>
        </div>
        <div className="title">
          <a href="https://music.163.com/discover/toplist?id=19723756" title="{info.name}">{info.name}</a>
          <div>
            <button className="btn play sprite_02">播放</button>
            <button className="btn favor sprite_02">收藏</button>
          </div>
        </div>
      </dt>
      <dd>
        <ol>
          {
            tracks.slice(0, 10).map((item, index) => {
              return (
                <li key={item.id} className="list-item">
                  <span className="rank">{index + 1}</span>
                  <div className="info">
                    <NavLink to={`/discover/song?id=${item.id}`} className="name text-nowrap">{item.name}</NavLink>
                    <div className="operate">
                      <a className="btn play sprite_02" title="播放" onClick={e => playMusic(item)}></a>
                      <a className="btn addto sprite_icon2" title="添加到播放列表" onClick={e => addMusic(item)}></a>
                      <a className="btn favor sprite_02" title="收藏"></a>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ol>
        <div className="more">
          <a href={`/discover/toplist?id=${info.id}`} className="s-c0">查看全部&gt;</a>
        </div>
      </dd>
    </TopRankingWrapper>
  )
})

export default TopRanking;
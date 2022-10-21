import React, { memo } from 'react'

import {
  getSizeImage,
  getCount
} from '@/utils/format-utils'

import {
  PlayListCoverWrapper
} from './style'

const PlayList = memo((props) => {
  const { info } = props;

  return (
    <PlayListCoverWrapper >
      <div className="cover-top">
        {/* 主体图片链接 */}
        <div className="cover">
          <a className="sprite_cover" href={`https://music.163.com/#/playlist?id=${info.id}`} title={info.name}></a>
          <img src={getSizeImage(info.picUrl,140)} alt=""></img>
          {/* 底部播放量及小图标 */}
          <div className="bottom sprite_cover">
            <span>
              <i className="sprite_icon earphone"></i>
              {getCount(info.playCount)}
            </span>
            <a className="sprite_icon play"></a>
          </div>
        </div>
      </div>
      {/* 标题 */}
      <p className="cover-bottom">
        <a className="s-c0">{info.name}</a>
      </p>
    </PlayListCoverWrapper>
  )
})

export default PlayList
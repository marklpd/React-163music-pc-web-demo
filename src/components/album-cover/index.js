import React, { memo } from 'react'

import { getSizeImage } from '@/utils/format-utils';

import {
  AlbumWrapper
} from './style'

const AlbumCover = memo((props) => {
  const { info, size = "130", width = "153", bgp = "-845px" } = props;

  return (
    <AlbumWrapper size={size} width={width} bgp={bgp}>
      <div className="album-img">
        <img src={getSizeImage(info.picUrl, size)} alt=""></img>
        <a className="cover sprite_cover" href={`/album?id=${info.id}`} title={info.name}></a>
      </div>
      <div className="album-info">
        <p className="name">
          <a className="s-c0">{info.name}</a>
        </p>
        <p className="artist">
          <a >{info.artist.name}</a>
        </p>
      </div>
    </AlbumWrapper>
  )
})

export default AlbumCover
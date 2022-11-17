import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { Carousel } from 'antd';
import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import AlbumCover from '@/components/album-cover'
import { getNewAlbumsAction } from '../../store/actionCreators';
import { AlbumWrapper } from './style';

const NewAlbum = memo(() => {

  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(["recommend", "newAlbums"])
  }), shallowEqual);
  const dispatch = useDispatch();

  const btnRef = useRef();
  useEffect(() => {
    dispatch(getNewAlbumsAction())
  }, [dispatch]);

  return (
    <AlbumWrapper>
      <HYThemeHeaderRCM title="新碟上架" />
      <div className="content">
        <a className="sprite_02 btn left" 
          onClick={() => btnRef.current.prev()}></a>
        <div className="album">
          <Carousel dots={false} ref={btnRef}>
            {
              [0, 1].map(item => {
                return (
                  <ul key={item} className="page">
                    {
                      newAlbums.slice(item * 5, (item + 1) * 5).map(iten => {
                        return (<li key={iten.id} className="sprite_02">
                          <AlbumCover info={iten} size = "100" width = "118" bgp = "-570px" />
                        </li>)
                      })
                    }
                  </ul>
                )
              })
            }
          </Carousel>
        </div>
        <a className="sprite_02 btn right" 
          onClick={() => btnRef.current.next()}></a>
      </div>
    </AlbumWrapper>
  )
})

export default NewAlbum
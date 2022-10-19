import React, { memo, useState, useCallback, useEffect, useRef } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getTopBannerAction } from '../../store/actionCreators'

import { Carousel } from 'antd';
import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style';

const TopBanner = memo(() => {
  // state
  const [CurrentIndex, setCurrentIndex] = useState(0);

  // 组件和redux关联
  const { topBanners } = useSelector(state => ({
    // topBanners: state.get("recommend").get("topBanners")
    topBanners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual)
  const dispatch = useDispatch();

  // 其他hooks
  const bannerRef = useRef();
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch])

  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to);
  }, [])

  // 其他业务逻辑
  const bgImage = topBanners[CurrentIndex] && (topBanners[CurrentIndex].imageUrl + "?imageView&blur=40x20")

  return (
    <div>
      <BannerWrapper bgImage={bgImage}>
        <div className="banner wrap-v2">
          <BannerLeft>
            <Carousel autoplay effect="fade" beforeChange={bannerChange} ref={bannerRef}>
              {
                topBanners.map((item, index) => {
                  return (
                    <div className="banner-item" key={item.imageUrl}>
                      <img className="banner-image" src={item.imageUrl} alt={item.typeTitle}></img>
                    </div>
                  )
                })
              }
            </Carousel>
          </BannerLeft>
          <BannerRight>
            <a className="btn" href="https://music.163.com/#/download" target="_blank"></a>
            <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
            <span className="shadow"></span>
            <span className="shadowr"></span>
          </BannerRight>
          <BannerControl>
            <button className="btn left" onClick={() => bannerRef.current.prev()}></button>
            <button className="btn right" onClick={() => bannerRef.current.next()}></button>
          </BannerControl>
        </div>
      </BannerWrapper>
    </div>
  )
})

export default TopBanner;
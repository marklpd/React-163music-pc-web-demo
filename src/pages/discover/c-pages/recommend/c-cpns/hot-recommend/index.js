import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import {
  RecommendWrapper
} from './style';

import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import { getHotRecommendAction } from '../../store/actionCreators';
import PlayListCoverWrapper from '@/components/playlist-cover';



const HotRecommend = memo(() => {
  // state

  // redux hooks
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual);
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(8));
  }, [dispatch])

  return (
    <RecommendWrapper>
      <HYThemeHeaderRCM title="热门推荐"
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]} />
      <ul className="recommend-list">
        {
          hotRecommends.map((item, index) => {
            return <PlayListCoverWrapper info={item} key={item.id}>
            </PlayListCoverWrapper>
          })
        }
      </ul>
    </RecommendWrapper>
  )
})

export default HotRecommend
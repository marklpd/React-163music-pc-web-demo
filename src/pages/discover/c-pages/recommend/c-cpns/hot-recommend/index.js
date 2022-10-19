import React, { memo } from 'react'

import {
  RecommendWrapper
} from './style';

import HYThemeHeaderRCM from '@/components/theme-header-rcm';
// import HYThemeCover from '@/components/theme-cover';

const HotRecommend = memo(() => {
  return (
    <RecommendWrapper>
      <HYThemeHeaderRCM title="热门推荐"
        keywords={["华语", "流行", "摇滚", "民谣", "电子"]} />
      <HYThemeHeaderRCM title="新碟上架"/>
      <HYThemeHeaderRCM title="榜单"/>
    </RecommendWrapper>
  )
})

export default HotRecommend
import React, { memo } from 'react'

import TopBanner from './c-cpns/top-banner';
import HotRecommend from './c-cpns/hot-recommend';
import NewAlbum from './c-cpns/new-album';
import RankingList from './c-cpns/ranking-list';

import {
  RecommendWrapper,
  Content, 
  RecommendLeft,
  RecommendRight
} from './style'

const Recommend = (props) => {

  return (
    <RecommendWrapper>
      <TopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend/>
          <NewAlbum/>
        </RecommendLeft>
        <RecommendRight>

        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}

export default memo(Recommend);
/*
const Recommend = (props) => {
  const { getBanners, topBanners } = props;

  useEffect(() => {
    getBanners()
  }, [getBanners])


  return (
    <RecommendWrapper>

    </RecommendWrapper>
  )
}

const mapStateToProps = state => ({
  topBanners: state.recommend.topBanners
})

const mapDispatchToProps = dispatch => ({
  getBanners: () => {
    dispatch(getTopBannerAction())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend));
*/
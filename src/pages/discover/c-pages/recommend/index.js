import React, { memo } from 'react'

import TopBanner from './c-cpns/top-banner';

import {RecommendWrapper} from './style'

const Recommend = (props) => {

  return (
    <RecommendWrapper>
      <TopBanner/>
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
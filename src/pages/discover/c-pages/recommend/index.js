import React, { memo, useEffect } from 'react'

import { connect } from 'react-redux'
import { getTopBannerAction } from './store/actionCreators'

import {
  RecommendWrapper
} from './style'

const Recommend = (props) => {
  const { getBanners } = props;

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
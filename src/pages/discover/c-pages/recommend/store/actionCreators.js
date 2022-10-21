import * as actionTypes from './constants';

import { getTopBanners, getHotRecommends } from '@/services/recommend';

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

const changeHotRecommendAction =(res)=> ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})

// 函数式action，返回一个函数
export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res));
    })
  }
}

export const getHotRecommendAction = (limit) => {
  return (dispatch) => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendAction(res))
      console.log(res);
    })
  }
}
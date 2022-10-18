import * as actionTypes from './constants';

import { getTopBanners } from '@/services/recommend';

const changeTopBannerAction =(res)=> ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

// 函数式action，返回一个函数
export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res));
    })
  }
}
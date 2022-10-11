import * as actionTypes from './constants';

import { getTopBanners } from '@/services/recommend';

// 函数式action，返回一个函数
export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then(res => {
      console.log(res);
    })
  }
}
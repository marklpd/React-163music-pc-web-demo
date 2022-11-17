import * as actionTypes from './constants';

import { getTopBanners, getHotRecommends, getNewAlbums, getTopList, getSettleSingers } from '@/services/recommend';

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})

const changeNewAlbumAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUM,
  newAlbums: res.albums.slice(0, 10)
})

const changeUpRankingAction = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  upList: res.playlist
})

const changeNewRankingAction = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  newList: res.playlist
})

const changeOriginRankingAction = (res) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  originList: res.playlist
})

const changeSettleSingerAction=(res)=>({
  type: actionTypes.CHANGE_SETTLE_SINGERS,
  settleSingers: res.artists
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
    })
  }
}

export const getNewAlbumsAction = () => {
  return (dispatch) => {
    getNewAlbums().then(res => {
      dispatch(changeNewAlbumAction(res))
    })
  }
}

export const getTopListAction = (id) => {
  return (dispatch) => {
    getTopList(id).then(res => {
      switch (id) {
        case 19723756:
          dispatch(changeUpRankingAction(res))
        case 3779629:
          dispatch(changeNewRankingAction(res))
        case 2884035:
          dispatch(changeOriginRankingAction(res))
        default:
      }
    })
  }
}

export const getSettleSingerAction = (cat, limit) => {
  return (dispatch) => {
    getSettleSingers(cat, limit).then(res => {
      dispatch(changeSettleSingerAction(res))
    })
  }
}
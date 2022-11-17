import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],

  upList: {},
  newList: {},
  originList: {},

  settleSingers: [],
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners);
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommends", action.hotRecommends);
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set("newAlbums",action.newAlbums);
    case actionTypes.CHANGE_UP_RANKING:
      return state.set("upList",action.upList);
    case actionTypes.CHANGE_NEW_RANKING:
      return state.set("newList",action.newList);
    case actionTypes.CHANGE_ORIGIN_RANKING:
      return state.set("originList",action.originList);

    case actionTypes.CHANGE_SETTLE_SINGERS:
      return state.set("settleSingers",action.settleSingers);
      
    default:
      return state;
  }
}

export default reducer;
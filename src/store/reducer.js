import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store'
import { reducer as PlayReducer } from '../pages/player/store'
import { reducer as topListReducer } from '../pages/discover/c-pages/toplist/store'
const cReducer = combineReducers({
  recommend: recommendReducer,
  play: PlayReducer,
  toplist: topListReducer
})

export default cReducer;
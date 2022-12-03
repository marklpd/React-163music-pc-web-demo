import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store'
import { reducer as PlayReducer } from '../pages/player/store'
const cReducer = combineReducers({
  recommend: recommendReducer,
  play: PlayReducer
})

export default cReducer;
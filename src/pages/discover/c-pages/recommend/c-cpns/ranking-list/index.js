import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getTopListAction } from '../../store/actionCreators';

import ThemeHeaderRCM from '@/components/theme-header-rcm';
import TopRanking from "@/components/top-ranking";
import { RankingWrapper } from './style';


const RankingList = memo(() => {
  const id = [19723756, 3779629, 2884035];

  const dispatch = useDispatch();
  const state = useSelector((state) => ({
    topUpList: state.getIn(["recommend", "upList"]),
    topNewList: state.getIn(["recommend", "newList"]),
    topOriginList: state.getIn(["recommend", "originList"]),
  }), shallowEqual)

  useEffect(() => {
    id.forEach(item => {
      dispatch(getTopListAction(item));
    })
  }, [dispatch])

  return (
    <RankingWrapper>
      <ThemeHeaderRCM title="榜单" />
      <div className="top">
        <TopRanking info={state.topUpList}/>
        <TopRanking info={state.topNewList}/>
        <TopRanking info={state.topOriginList}/>
      </div>
    </RankingWrapper>
  )
})

export default RankingList
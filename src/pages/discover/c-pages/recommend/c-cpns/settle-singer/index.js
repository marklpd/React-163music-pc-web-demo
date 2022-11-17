import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import {
  SettleSingerWrapper
} from './style'

import ThemeHeaderSmall from '@/components/theme-header-small'
import { getSettleSingerAction } from '../../store/actionCreators'
import { getSizeImage } from '@/utils/format-utils'

const SettleSinger = memo(() => {

  //redux Hooks
  const state = useSelector((state) => ({
    settleSingers: state.getIn(["recommend", "settleSingers"])
  }), shallowEqual)
  const dispatch = useDispatch();

  // other hook
  useEffect(() => {
    dispatch(getSettleSingerAction(1001, 5))
  }, [dispatch])

  return (
    <SettleSingerWrapper>
      <ThemeHeaderSmall title="入驻歌手" more="查看全部>"></ThemeHeaderSmall>
      <ul className="singer-list">
        {
          state.settleSingers.map((item) => {
            return (
              <li className="item" key={item.id}>
                <a>
                  <img src={getSizeImage(item.img1v1Url,62)}/>
                  <div className="info">
                    <div className="name">{item.name}</div>
                    <div className="title text-nowrap">{item.alias.join("") || item.name}</div>
                  </div>
                </a>
              </li>
            )
          })
        }
      </ul>
      <div className="apply-for sprite_button" >
        <a href="/abc" className="sprite_button">申请成为网易音乐人</a>
      </div>
    </SettleSingerWrapper>
  )
})

export default SettleSinger 
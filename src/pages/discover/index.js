import React, { memo } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { discoverMenu } from '../../common/local-data'

import {
  DiscoverWrapper,  
  TopMenu
} from "./style"

const Discover = memo(() => {
  return (
    <DiscoverWrapper>
      <TopMenu >
        <ul className="wrap-v1">
          {
            discoverMenu.map((item,index) => {
              return (
                <li className="item" key={item.title}>
                  <NavLink end to={item.link}>{item.title}</NavLink>
                </li>
              )
            })
          }
        </ul>
      </TopMenu>
      {/* 渲染子路由 */}
      <Outlet/>
    </DiscoverWrapper>
  )
})

export default Discover
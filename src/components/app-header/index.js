import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { headerLinks } from '@/common/local-data';

import { Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';

import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style';

const AppHeader = memo(() => {

  const showItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon" />
        </NavLink>
      )
    } else {
      return <a href={item.link} >{item.title}</a>
    }
  }

  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#" className="logo sprite_01">网易云音乐</a>
          <div className="select-list">
            <ul>
              {
                headerLinks.map((item, index) => {
                  return (
                    <li className="select-item" key={item.title}>
                      {showItem(item, index)}
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </HeaderLeft>

        <HeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} />
          {/* <Input className="search" placeholder="音乐/视频/电台/用户"/> */}
          <div className="center">创作者中心</div>
          <div className="login">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})

export default AppHeader
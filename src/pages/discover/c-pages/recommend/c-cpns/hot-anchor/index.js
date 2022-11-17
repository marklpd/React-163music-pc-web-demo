import React, { memo } from 'react'

import {
  hotAnchor
} from "@/common/local-data";

import ThemeHeaderSmall from '@/components/theme-header-small'
import {
  HotAnchorWrapper
} from './style';

import { getSizeImage } from '@/utils/format-utils'

const HotAnchor = memo(() => {
  return (
    <HotAnchorWrapper>
      <ThemeHeaderSmall title="热门主播"></ThemeHeaderSmall>
      <ul className="anchor-list">
        {
          hotAnchor.map((item,index)=>{
            return (
              <li className="item" key={item.name}>
                <a href="/abc" className="image">
                  <img src={getSizeImage(item.picUrl,40)} alt=""/>
                </a>
                <div className="info">
                  <p>
                    <a href={item.picUrl} className="s-c0">{item.name}</a>
                  </p>
                  <p className="position text-nowrap">{item.position}</p>
                </div>
              </li>
            )
          })
        }
      </ul>
    </HotAnchorWrapper>
  )
})

export default HotAnchor 
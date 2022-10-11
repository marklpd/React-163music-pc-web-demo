import React, { memo, Fragment } from 'react'

import {
  footerLinks,
  footerImages
} from "@/common/local-data";

import {
  AppFooterWrapper,
  FooterLeft,
  FooterRight
} from "./style"

const AppFooter = memo(() => {
  return (
    <AppFooterWrapper>
      <div className="wrap-v2 content">
        <FooterLeft>
          <p className="link">
            {
              footerLinks.map((item, index) => {
                if (index === 0) {
                  return (
                    <Fragment key={item.title}>
                      <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
                    </Fragment>
                  )
                } else return (
                  <Fragment key={item.title}>
                    <span className="line">|</span>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
                  </Fragment>
                )
              })
            }
          </p>
          <p>
            <span className="right">网易公司版权所有©1997-2022</span>
            <span>杭州乐读科技有限公司运营：</span>
            <a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png" rel="noopener noreferrer" target="_blank" >浙网文[2021] 1186-054号</a>
          </p>
          <p>
            <a href="https://beian.miit.gov.cn/#/Integrated/index" rel="noopener noreferrer" target="_blank" >粤B2-20090191-18&nbsp;&nbsp;工业和信息化部备案管理系统网站</a>
            <a>
              <span className="police-logo"></span>
              <span>浙公网安备 33010902002564号</span>
            </a>
          </p>
          <p>
            <span className="right">互联网宗教信息服务许可证：浙（2022）0000120</span>
            <span>监督举报邮箱：51jubao@service.netease.com</span>
          </p>
        </FooterLeft>

        <FooterRight>
            <ul>
             {
              footerImages.map((item,index)=>{
                return(
                  <li className="item">
                    <a className="link" href={item.link} rel="noopener noreferrer" target="_blank"></a>
                    <span className="title"></span>
                  </li>
                )
              })
             }
            </ul>
        </FooterRight>
      </div>
    </AppFooterWrapper>
  )
})

export default AppFooter;
import React, { memo } from 'react'

import {
  MineWrapper
} from './styled'

const Mine = memo(() => {
  return (
    <MineWrapper >
      <div className="content wrap-v2">
        <div className="pic">
          <a className="login" href="/#">立即登录</a>
        </div>
      </div>
    </MineWrapper>
  )
})

export default Mine
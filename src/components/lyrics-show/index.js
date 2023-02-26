import React, { memo } from 'react'

import { LyricsShowWrapper } from './style'

const LyricsShow = memo((props) => {
  return (
    <LyricsShowWrapper>
      {props.info}
    </LyricsShowWrapper>
  )
})

export default LyricsShow
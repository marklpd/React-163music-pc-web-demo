import React, { memo } from 'react'

import PlayerInfo from './c-cpns/player-info';
import PlayerComment from './c-cpns/player-comment';
import PlayerSongs from './c-cpns/player-songs';
import PlayerRelevant from './c-cpns/player-relevant';
import {
  PlayerWrapper,
  PlayerLeft,
  PlayerRight
} from './style';


const Player = memo(() => {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <PlayerInfo />
        </PlayerLeft>
        <PlayerRight>

        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})

export default Player
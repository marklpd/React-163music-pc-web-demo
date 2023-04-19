import React, { memo } from 'react'
import { useLocation } from 'react-router-dom'

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
  const location = useLocation()

  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <PlayerInfo id={location.search.slice(4)} />
        </PlayerLeft>
        <PlayerRight>

        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})

export default Player
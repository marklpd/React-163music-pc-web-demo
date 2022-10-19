import React, { memo } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  HeaderWrapper
} from './style';

const ThemeHeaderRCM = memo((props) => {
  const { title, keywords } = props;

  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <Link className="link" to="/discover/playlist">{title}</Link>
        <div className="tab">
          <ul>
            {
              keywords.map((item, index) => {
                return <li key={item}>
                  <a>{item}</a>
                  {(index === 4) ? "" : <span className="line">|</span>}
                </li>
              })
            }
          </ul>
        </div>
      </div>
      <div className="right">
        <Link to="/discover/playlist">更多</Link>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  )
})

ThemeHeaderRCM.propTypes =  {
  title: PropTypes.string.isRequired,
  keywords: PropTypes.array
}

ThemeHeaderRCM.defaultProps = {
  keywords: []
}

export default ThemeHeaderRCM;
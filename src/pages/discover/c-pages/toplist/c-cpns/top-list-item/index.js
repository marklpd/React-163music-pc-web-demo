import React, { memo, Fragment, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getSizeImage } from '@/utils/format-utils.js';
import { getToplistInfoAction, changeCurrentIndexAction, changeCurrentToplistIdAction } from '../../store/actionCreator'

import { TopListItemWrapper } from './style';
import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function TopListItem(props) {
  // redux hook
  const dispatch = useDispatch()
  const { currentIndex, toplistInfo } = useSelector((state) => ({
    toplistInfo: state.getIn(['toplist', 'toplistInfo']),
    currentIndex: state.getIn(['toplist', 'currentIndex'])
  }), shallowEqual)

  // other hook
  useEffect(() => {
    // 榜单item
    dispatch(getToplistInfoAction())
  }, [dispatch])

  // other function
  const clickItem = (e, index, id) => {
    e.preventDefault();
    // dispatch
    dispatch(changeCurrentToplistIdAction(id))
    dispatch(changeCurrentIndexAction(index))
  };

  return (
    <TopListItemWrapper>
      {toplistInfo.map((item, index) => {
        return (
          <Fragment key={item.id}>
            <h3 style={{ marginTop: index === 4 ? '17px' : '' }}>
              {index === 0 ? '云音乐特色榜' : index === 4 ? '全球媒体榜' : ''}
            </h3>
            <NavLink
              className={"info " + (index === currentIndex ? 'bg' : '')}
              onClick={(e) => clickItem(e, index, item.id)}
              to={{ pathname: `/discover/songs`, search: `?id=${item.id}` }}
            >
              <div className="image">
                <img src={getSizeImage(item.coverImgUrl, 44)} alt="" />
              </div>
              <div className="info-right">
                <div className="info-title">{item.name}</div>
                <div className="info-update">{item.updateFrequency}</div>
              </div>
            </NavLink>
          </Fragment>
        );
      })}
    </TopListItemWrapper>
  );
}

TopListItem.propTypes = {
  selected: propTypes.bool,
};

TopListItem.defaultProps = {
  selected: true,
};

export default memo(TopListItem);

import React, { memo, useEffect, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Sortable from 'sortablejs';
import classNames from 'classnames';

import {
  changePlayListAction,
  getSongDetailAction,
  changeCurrentSongIndexAction,
  changeCurrentIndexAndSongAction
} from '../../../store/actionCreators';
import { formatMinuteSecond } from '@/utils/format-utils';

import { PlayListWrapper } from './style';

export default memo(function PlayList() {
  const dispatch = useDispatch();
  const { playList, currentSongIndex } = useSelector(state => ({
    playList: state.getIn(["play", "playList"]),
    currentSongIndex: state.getIn(["play", "currentSongIndex"])
  }), shallowEqual);

  // other hook
  const sortable = useRef();
  const playlistRef = useRef();
  // 歌曲列表拖拽初始化
  useEffect(() => {
    const el = playlistRef.current.querySelector('.main-playlist');
    if (sortable.current) {
      sortable.current.destroy()
    }
    sortable.current = new Sortable(el, {
      sort: true,
      animation: 200,
      currentIndex: 0,
      onEnd: function (evt) {
        // 拖拽结束发生该事件 
        const list = [...playList];
        const cur = list.splice(evt.oldIndex, 1)[0];
        list.splice(evt.newIndex, 0, cur);
        // 更改播放列表顺序
        dispatch(changePlayListAction(list));
        // 更新当前歌曲新的位置
        if (currentSongIndex === evt.oldIndex) {
          dispatch(changeCurrentSongIndexAction(evt.newIndex));
        } else if (currentSongIndex >= evt.newIndex && currentSongIndex <= evt.oldIndex) {
          dispatch(changeCurrentSongIndexAction(currentSongIndex + 1));
        } else if (currentSongIndex <= evt.newIndex && currentSongIndex >= evt.oldIndex) {
          dispatch(changeCurrentSongIndexAction(currentSongIndex - 1));
        }
      },
    });
  }, [dispatch, playList]);

  const changeSong = (id) => {
    dispatch(getSongDetailAction(id))
  }

  const clearCurrentSong = (e, index) => {
    e.stopPropagation();
    let newList = [...playList];
    newList.splice(index, 1);
    dispatch(changePlayListAction(newList));
    if (index === currentSongIndex) {
      dispatch(changeCurrentIndexAndSongAction(0));
    } else if (index < currentSongIndex) {
      dispatch(changeCurrentSongIndexAction(currentSongIndex - 1))
    }
  }

  return (
    <PlayListWrapper ref={playlistRef}>
      <div className="main-playlist">
        {
          playList.map((item, index) => {
            return (
              <div key={item.id}
                className={classNames("play-item", { "active": currentSongIndex === index })}
                onClick={() => { changeSong(item.id) }}>
                <div className="left">{item.name}</div>
                <div className="right">
                  <span className="icn-del sprite_playlist" onClick={(e) => clearCurrentSong(e, index)}>删除</span>
                  <span className="singer text-nowrap">{item.ar[0].name}</span>
                  <span className="duration">{formatMinuteSecond(item.dt)}</span>
                  <span className="sprite_playlist link"></span>
                </div>
              </div>
            )
          })
        }
      </div>
    </PlayListWrapper>
  )
})

import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { NavLink, Navigate } from 'react-router-dom';

import {
  debounce
} from '@/utils/format-utils.js';
import {
  getSearchSongListAction,
  changeFocusStateAction,
} from './store/actionCreator';
import { headerLinks } from '@/common/local-data';
import { getSongDetailAction } from '@/pages/player/store';

import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style';

const AppHeader = memo(() => {
  const [isRedirect, setIsRedirect] = useState(false);
  const [value, setValue] = useState('');
  const [recordActive, setRecordActive] = useState(-1);

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

  // redux hook
  const dispatch = useDispatch();
  const { searchSongList, focusState } = useSelector(
    (state) => ({
      searchSongList: state.getIn(['themeHeader', 'searchSongList']),
      focusState: state.getIn(['themeHeader', 'focusState']),
    }),
    shallowEqual
  );

  // other hook
  const inputRef = useRef();
  // (根据当前焦点状态设置input焦点)
  useEffect(() => {
    // 获取焦点
    if (focusState) inputRef.current.focus();
    // 失去焦点
    else inputRef.current.blur();
  }, [focusState]);

  // other function debounce()  函数防抖进行优化
  const changeInput = debounce((target) => {
    let value = target.value.trim();
    if (value.length < 1) return;
    // 显示下拉框
    dispatch(changeFocusStateAction(true));
    // 发送网络请求
    dispatch(getSearchSongListAction(value));
  }, 400);

  // 点击当前item歌曲项
  const changeCurrentSong = (id, item) => {
    // 放到搜索文本框
    setValue(item.name + '-' + item.ar[0].name);
    //派发action
    dispatch(getSongDetailAction(id));
    // 隐藏下拉框
    dispatch(changeFocusStateAction(false));
    // 播放音乐
    document.getElementById('audio').autoplay = true;
  };

  // 表单回车:跳转到搜索详情
  const handleEnter = useCallback(
    (e) => {
      // 说明当前光标有”高亮当前行“
      if (recordActive >= 0) {
        // 保存value
        setValue(
          searchSongList[recordActive].name +
          '-' +
          searchSongList[recordActive].ar[0].name
        );
      }
      dispatch(changeFocusStateAction(false));
      // 只要在搜索框回车: 都进行跳转
      setIsRedirect(true);
    },
    [dispatch, recordActive, searchSongList]
  );

  // 获取焦点
  const handleFocus = useCallback(() => {
    // 当文本获取焦点时,文本被选中状态
    inputRef.current.select();
    // 更改为获取焦点状态
    dispatch(changeFocusStateAction(true));
    // 修改状态重定向状态
    setIsRedirect(false);
  }, [dispatch]);

  const handleBlur = useCallback(() => {
    dispatch(changeFocusStateAction(false));
  })

  // 监控用户是否按: "上"或"下"键
  const watchKeyboard = useCallback(
    (even) => {
      let activeNumber = recordActive;
      if (even.keyCode === 38) {
        activeNumber--;
        activeNumber =
          activeNumber < 0 ? searchSongList?.length - 1 : activeNumber;
        setRecordActive(activeNumber);
      } else if (even.keyCode === 40) {
        activeNumber++;
        activeNumber =
          activeNumber >= searchSongList?.length ? 0 : activeNumber;
        setRecordActive(activeNumber);
      }
    },
    [recordActive, setRecordActive, searchSongList]
  );

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
          {/* <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />} /> */}
          <div className="search-wrapper">
            <Input
              ref={inputRef}
              className="search "
              placeholder="音乐/歌手"
              size="large"
              prefix={<SearchOutlined />}
              onChange={(e) => setIsRedirect(false) || setValue(e.target.value)}
              onInput={({ target }) => changeInput(target)}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onPressEnter={(e) => handleEnter(e)}
              value={value}
              onKeyDown={watchKeyboard}
            />
            {isRedirect && (
              <Navigate
                to={{
                  to: '/search/single',
                  search: `?song=${value}&type=1`,
                }}
              />
            )}
            <div
              className="down-slider"
              style={{ display: focusState && inputRef.current.input.value ? 'block' : 'none' }}
            >
              <div className="search-header">
                <span className="discover">搜"{value}"相关用户&gt;</span>
              </div>

              <div className="content">
                <div className="zuo">
                  <span className="song">单曲</span>
                </div>

                <ul className="main">
                  {searchSongList &&
                    searchSongList.map((item, index) => {
                      return (
                        <li
                          className={
                            'item ' + (recordActive === index ? 'active' : '')
                          }
                          key={item.id}
                          onClick={() => changeCurrentSong(item.id, item)}
                        >
                          {/* <span>{item.name}</span>-{item.ar[0].name} */}
                          <NavLink to={`/discover/song?id=${item.id}`}><span>{item.name}</span>-{item.ar[0].name}</NavLink>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
          <div className="center">创作者中心</div>
          <div className="login">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})

export default AppHeader
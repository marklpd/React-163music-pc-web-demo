import React, { memo, useRef, useEffect } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { scrollTo } from "@/utils/ui-helper";

import { PanelWrapper } from './style';

export default memo(function LyricPanel() {
  const { currentLyrics, currentLyricIndex } = useSelector(state => ({
    currentLyrics: state.getIn(["play", "currentLyrics"]),
    currentLyricIndex: state.getIn(["play", "currentLyricsIndex"])
  }), shallowEqual);

  // other hooks
  const panelRef = useRef();
  useEffect(() => {
    if (currentLyricIndex > 0 && currentLyricIndex < 3) return;
    scrollTo(panelRef.current, (currentLyricIndex - 3) * 32, 300)
  }, [currentLyricIndex]);

  return (
    <PanelWrapper ref={panelRef}>
      <div className="lrc-content">
        {
          currentLyrics.map((item, index) => {
            return (
              <div key={index}
                className={"lrc-item " + (index === currentLyricIndex ? "active" : "")}>
                {item.content}
              </div>
            )
          })
        }
      </div>
    </PanelWrapper >
  )
})

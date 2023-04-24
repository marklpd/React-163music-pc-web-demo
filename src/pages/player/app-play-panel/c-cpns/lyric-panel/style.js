import styled from 'styled-components';

export const PanelWrapper = styled.div`
  position: relative;
  flex: 1;
  margin: 21px 0 20px 0;
  overflow: scroll;

  /* 滚动条样式 */
  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #868686;
  }

  ::-webkit-scrollbar-corner {
    display: none;
  }

  .lrc-content {
    .lrc-item {
      height: 32px;
      line-height: 32px;
      text-align: center;
      color: #989898;

      &.active {
        color: #fff;
      }
    }
  }

`
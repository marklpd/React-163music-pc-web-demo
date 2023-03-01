import styled from 'styled-components';

export const PlayListWrapper = styled.div`
  position: relative;
  width: 553px;
  padding: 2px;
  overflow: auto;

  /* 滚动条样式 */
  ::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #868686;
  }

  .play-item {
    padding: 0 8px 0 25px;
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    line-height: 28px;
    color: #ccc;

    &.active {
      color: #fff;
      background-color: #000;

      ::before {
        content: "";
        position: absolute;
        left: 8px;
        width: 10px;
        height: 13px;
        background: url(${require("@/assets/img/playlist_sprite.png")}) -182px 0;
      }
    }
    &:hover {
      color: #fff;

      .icn-del {
        display: block;
      }
    }

    .left {

    }

    .right {
      display: flex;
      align-items: center;

      .icn-del {
        width: 13px;
        height: 13px;  
        background-position: -51px 0;
        opacity: 0;
        overflow: hidden;
        text-indent: -9999px;
      }
      &:hover {
        .icn-del {
          opacity: 1;
        }
      }

      .singer {
        width: 80px;
        padding-left: 10px;
      }

      .duration {
        width: 45px;
      }

      .link {
        margin-left: 20px;
        width: 14px;
        height: 16px;
        background-position: -100px 0;
      }
    }
  }
`
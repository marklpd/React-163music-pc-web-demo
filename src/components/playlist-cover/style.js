import styled from "styled-components";

export const PlayListCoverWrapper = styled.li`
  width: 140px;
  height: 234px;
  padding-bottom: 30px;

  .cover-top {
    // 图片
    .cover {
      position: relative;
      width: 140px;
      height: 140px; 
      &>a {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-position: 0 0;
      }
      img {
        width: 100%;
        height: 100%; 
      } 
    }

    // 底部播放量及小图标
    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;

      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 27px;
      background-position: 0 -537px;
      color: #ccc;

      &>span {
        margin-top: 6px;
      }

      .earphone {
        display: inline-block;
        width: 14px;
        height: 11px;
        margin: 2px 5px 0 10px;
        background-position: 0 -24px;
        vertical-align: -1px;
      }

      .play {
        display: inline-block;
        width: 16px;
        height: 17px;
        margin-right: 10px;
        background-position: 0 0;
      }
    }
  }

  .cover-bottom {
    margin: 8px 0 3px;
    font-size: 14px;
  }
`
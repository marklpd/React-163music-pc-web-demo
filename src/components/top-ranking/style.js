import styled from "styled-components";

export const TopRankingWrapper = styled.dl`
  flex: 1;

  .header {
    display: flex;
    height: 120px;
    padding: 20px 0 0 20px;

    .image {
      position: relative;
      width: 80px;
      height: 80px;
    }

    .title {
      width: 116px;
      margin: 6px 0 0 10px;

      a {
        display: inline-block;
        margin-bottom: 10px;
        font-size: 14px;
        color: #333;
        font-weight: 700;
      }

      .btn {
        display: inline-block;
        width: 22px;
        height: 22px;
        margin-right: 10px;
        text-indent: -9999px
      }

      .play {
        background-position: -267px -205px;
      }
      .play:hover {
        background-position: -267px -235px;
      }

      .favor {
        background-position: -300px -205px;
      }
      .favor:hover {
        background-position: -300px -235px;
      }
    }
  }

  .list-item {
    display: flex;
    align-items: center;
    height: 32px;
    line-height: 32px;

    :nth-child(-n+3) .rank {
      color: #c10d0c;
    }

    .rank {
      display: inline-block;
      width: 35px;
      height: 32px;
      margin-left: 15px;
      text-align: center;
      font-size: 16px;
    }

    .info {
      display: flex;
      justify-content: space-between;
      width: 170px;
      height: 17px;
      line-height: 17px;

      .name {
        flex: 1;
        color: #000;
      }

      .operate {
        display: none;
        width: 82px;

        .btn {
          display: inline-block;
          width: 17px;
          height: 17px;
          margin-left: 8px;
          cursor: pointer;
        }

        .play {
          background-position: -267px -268px;
        }

        .addto {
          position: relative;
          top: 2px;
          background-position: 0 -700px;
        }

        .favor {
          background-position: -297px -268px;
        }
      }

      &:hover {
        .operate {
          display: block;
        }
      }
    }
  }

  .more {
    height: 32px;
    line-height: 32px;
    margin-right: 32px;
    text-align: right;
    
  }
`
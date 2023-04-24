import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height:75px;
  background-color:#242424;
  font-size: 14px;

  .content {
    display:flex;
    justify-content:space-between;
  }

  .divider {
    height:5px;
    background-color: #C20C0C;
  }
`
export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    display: inline-block;
    width: 176px;
    height: 70px;
    background-position: 0 0;
    text-indent: -9999px;
  }

  .select-list {
    display:inline-block;
    display: flex;
    line-height: 70px;

    .select-item {
      position:relative;
      display: inline-block;

      a {
        display: block;
        padding: 0 19px;
        color: #ccc;
      }

      :last-of-type a {
        position: relative;
        ::after {
          position:absolute;
          content:"";
          top: 21px;
          left: 100px;
          width: 28px;
          height: 19px;
          background:url(${require("@/assets/img/sprite_01.png")});
          background-position: -190px 0;
        }
      }

      &:hover a,.active {
        color:#fff;
        background: #000;
        text-decoration:none;
      }

      .active .icon {
        position: absolute;
        display: inline-block;
        left:50%;
        top: 64px;
        width: 12px;
        height: 7px;
        margin-left: -6px;
        background-position: -226px 0;
      }
    }
  }
`

export const HeaderRight = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;

  .search {
    width: 158px;
    height: 32px;
    border-radius:16px;

    input {
      &::placeholder {
        
        font-size: 12px;
      }
    }
  }

  /* 下拉框 */
  .down-slider {
    position: absolute;
    top: 59px;
    left: 0;
    right: 0;
    width: 237px;
    z-index: 999;
    /* height: 144px; */
    border: 1px solid #bebebe;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 4px 7px #555;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);

    .search-header {
      height: 35px;
      .discover {
        display: inline-block;
        padding-top: 10px;
        padding-left: 10px;
      }
    }

    .content {
      display: flex;
      border: 1px solid rgb(183, 183, 187);

      .zuo {
        /* float: left; */
        /* height: 100%; */
        width: 65px;
        /* border: 1px solid rgb(183, 183, 187); */
        padding-top: 10px;
        border-bottom: none;

        .song {
          color: #ccc;
          margin-left: 28px;
        }
      }

      .main {
        display: inline-block;
        font-size: 13px;
        line-height: 28px;
        border-left: 1px solid #e2e2e2;

        .item {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          width: 168px;
          cursor: pointer;
          height: 35px;
          line-height: 35px;
          color: #000;
          text-indent: 8px;

          &:hover {
            background-color: #ecf0f1;
            border-radius: 5%;
            color: #2ecc71;
          }

          &.active {
            background-color: #ecf0f1;
            color: #2ecc71;
          }

          a {
            display: block;
            width: 100%;
          }
        }
      }
      span.blue {
        color: #7ab3dd;
      }
    }
  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 16px;
  }

  .login {
    padding: 0 22px 0 0;
  }
`
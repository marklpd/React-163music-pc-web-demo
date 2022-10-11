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
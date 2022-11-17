import styled from "styled-components";

export const UserLoginWrapper = styled.div`
  .content {
    width: 250px;
    height: 126px;
    background-position: 0 0;

    .info {
      width: 205px;
      margin: 0 auto;
      padding: 16px 0;
      line-height: 22px;  
      color: #666;
    }

    .login {
      display: block;
      width: 100px;
      height: 31px;
      margin: 0 auto;
      line-height: 31px;
      text-align: center;
      color: #fff;
      text-shadow: 0 1px 0 #8a060b;

      background-position: 0 -195px;
    }

    .login:hover {
      text-decoration: none;
      background-position: -110px -195px;
    }
  }  
`
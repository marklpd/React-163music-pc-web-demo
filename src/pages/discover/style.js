import styled from 'styled-components';

export const DiscoverWrapper = styled.div`
  position: relative;
  top: -5px;
`

export const TopMenu = styled.div`
  height: 35px;
  
  background-color: #C20C0C;
  border-bottom: 1px solid #a40011;

  ul {
    padding-left: 180px;

    li {
      display: inline-block;
    }

    .item {
      cursor: pointer;

      a {
        display: inline-block;
        height: 20px;
        padding: 0 13px;
        margin: 7px 17px 0;
        line-height: 21px;
        color: #fff;
      }

      &:hover a,
      a.active{
        text-decoration: none;
        background-color: #9B0909;
        border-radius: 20px; 
      }
    }
  }
`
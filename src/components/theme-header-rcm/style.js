import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 33px;
  padding: 0 10px 0 34px;
  background-position: -225px -156px;
  border-bottom: 2px solid #C10D0C;

  display:flex;
  justify-content:space-between;
  align-items: center;

  .left {
    display: flex;
    .link {
      font-size: 20px;
      font-weight: normal;
      line-height: 28px;
      color: #333;
      text-decoration: none;
    }

    .tab {
      margin: 7px 0 0 20px;
      ul {
        display: flex;
      }

      .line {
        margin: 0 10px;
        color: #ccc;
      }
    }
  }

  .right {
    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      vertical-align: middle;
      background-position: 0 -240px;
    }
  }
`

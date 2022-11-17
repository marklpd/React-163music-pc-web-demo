import styled from "styled-components";

export const SettleSingerWrapper = styled.div`
  margin-top: 15px;

  .singer-list {
    margin: 21px 0 14px 20px;

    .item {
      margin-top: 14px; 

      a {
        display: flex;
        width: 210px;
        height: 62px;
        background-color: #fafafa;
        text-decoration: none;

        :hover {
          background-color: #f4f4f4;
        }

        .info {
          width: 148px;
          padding-left: 14px;
          border: 1px solid #e9e9e9;
          border-left: none;

          .name {
            margin-top: 8px;
            color: #333;
            font-size: 14px;
            font-weight: 700; 
          }

          .title {
            margin-top: 5px;
          }
        }
      }
    }
  }

  .apply-for {
    width: 210px;
    height: 31px;
    margin-left: 20px;
    border-radius: 4px;

    background-position: 0 -59px;
    :hover {
      background-position: 0 -141px;
    }

    a {
      color: #333;
      font-weight: 700;
      text-align: center;
      display: block;
      line-height: 31px;
      margin-left: 10px;
      padding-right: 5px;
      text-decoration: none;

      background-position: right -100px;
      :hover {
        background-position: right -182px;
      } 
    }
  }
`
import styled from "styled-components";

export const HotAnchorWrapper = styled.div`
  margin-top: 30px;

  .anchor-list {
    margin: 20px 0 0 20px;
    
    .item {
      display: flex;
      width: 210px;
      height: 50px;

      .image {
        display: flex;
        width: 40px;
        height: 40px;
        margin-right: 10px;
      }

      .info {
        width: 160px;
        p {
          width: 100%;
          height: 21px;
          line-height: 21px;
        }
        .position {
          color: #333;
        }
      }
    }
  }
`
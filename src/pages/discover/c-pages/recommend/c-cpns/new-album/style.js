import styled from "styled-components";

export const AlbumWrapper = styled.div`
  .content {
    display: flex;
    align-items: center;
    height: 186px;
    margin: 20px 0 37px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;

    .btn {
      display: inline-block;
      width: 17px;
      height: 17px;
    }

    .left {
      background-position: -260px -75px;
    }

    .right {
      background-position: -300px -75px;
    }

    .album {
    width: 645px;
    height: 150px;

    .ant-carousel .slick-slide {
      height: 150px;
      overflow: hidden;
    }

    .page {
      display: flex !important;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;

      li {
        width: 118px;
        height: 150px;
        margin-left: 11px;
        background-position: -260px 100px;
      }
    }
  }
}


`
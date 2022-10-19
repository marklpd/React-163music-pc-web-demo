import styled from "styled-components";

export const BannerWrapper = styled.div`
  background: url(${props => props.bgImage}) center center/6000px;

  .banner {
    display: flex;
    position: relative;

    height: 285px;
  }
`
export const BannerLeft = styled.div`
  width: 730px; 

  .banner-item {
    height: 285px;
    .banner-image {
      width: 100%;
      height: 100%;
    }
  }
`
export const BannerRight = styled.div`
  position: absolute;
  right: -1px;
  width: 254px;
  height: 285px;
  background: url(${require("@/assets/img/download.png")}) ;

  .btn {
    display: block;
    width: 215px;
    height: 56px;
    margin: 186px 0 0 19px;
    background: url(${require("@/assets/img/download.png")}) no-repeat;
    background-position: 0 9999px;
    text-indent: -9999px;
  }
  .btn:hover {
    background-position: 0 -290px;
    text-decoration: none;
  }

  p {
    margin: 10px auto;
    text-align: center;
    color: #8d8d8d;
  }

  .shadow,
  .shadowr {
    display: block;
    position: absolute;
    top: 0;
    left: -20px;
    width: 20px;
    height: 285px;
    background-image: url(${require("@/assets/img/banner_sprite.png")});
    background-position: -1px 0;
  }
  .shadowr {
    left: auto;
    right: -20px;
    background-position: -20px 0;
  }
`
export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  /* transform: translateY(-50%); */
  transform: translateY(-31.5px);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require("@/assets/img/banner_sprite.png")});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }
  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`

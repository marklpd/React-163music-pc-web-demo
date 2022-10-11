import styled from "styled-components";

export const AppFooterWrapper = styled.div`
  height: 172px;
  border-top:1px solid #d3d3d3;
  color: #666;
  background: #f2f2f2;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const FooterLeft = styled.div`
  width: 535px;
  height: 115px;
  padding-top: 15px;
  line-height: 24px;

  p {
    display: block;
  }

  .link {
    a {
      color: #999;
    }
    .line {
      margin:0 4px;
      color: #999;
    }
  }

  .right {
    margin-right: 14px;
  }

  .police-logo {
    width: 14px;
    height: 14px;
    background-size:cover;
    display:inline-block;
    margin: 0 2px 0 8px;
    vertical-align: -2px;
  }
`

export const FooterRight = styled.div`
  width: 420px;
  height: 70px;
  margin-top: 33px;

  ul{
    display: flex;
  }

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;

    .link {
      display: inline-block;
      width: 50px;
      height: 45px;

      background-image: url(${require("@/assets/img/sprite_footer_02.png")});
      background-size: 110px 552px;
    }

    :nth-child(1) .link {
      background-position: -60px -456.5px;
    }
    :nth-child(2) .link {
      background-position: -60px -101px;
    }
    :nth-child(3) .link {
      background-position: 0 0;
    }
    :nth-child(4) .link {
      background-position: -60px -50.5px;
    }
    :nth-child(5) .link {
      background-position: 0 -101px;
    }

    .title {
      display: inline-block;
      margin: 5px 5px 0;
      width: 52px;
      height: 14px;
      background-image: url(${require("@/assets/img/sprite_footer_01.png")});
      background-size: 180px 139px;
    }

    :nth-child(1) .title {
      background-position: -1px -108px;
      width: 72px;
      margin-left: -6px;
    }
    :nth-child(2) .title {
      background-position: -1px -90px;
    }
    :nth-child(3) .title {
      background-position: 0 0;
      margin-top: 7px;
    }
    :nth-child(4) .title {
      background-position: 0 -54px;
      margin-top: 6px;
    }
    :nth-child(5) .title {
      background-position: -1px -72px;
      margin-top: 6px;
    }
  }
`
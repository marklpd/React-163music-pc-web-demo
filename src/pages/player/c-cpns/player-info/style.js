import styled from 'styled-components';

export const InfoWrapper = styled.div`
  display: flex;
  padding: 47px 30px 40px 39px;
`

export const InfoLeft = styled.div`
  width: 206px;

  .image {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 198px;
    height: 198px;

    .cover {
      background-position: -140px -580px;
      width: 206px;
      height: 205px;
      top: -4px;
      left: -4px;
    }
  }

  .link {
    margin: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      display: inline-block;
      width: 16px;
      height: 16px;
      background-position: -34px -863px;
    }

    a {
      color: #0c73c2;
      text-decoration: underline;
    }
  }
`

export const InfoRight = styled.div`
  width: 414px;
  margin-left: 20px;

  .header {
    display: flex;
    i {
      display: inline-block;
      width: 54px;
      height: 24px;
      background-position: 0 -463px;
    }

    .info {
      position: relative;
      top: -4px;
      margin-left: 10px;
      
      .title {
        font-size: 24px;
        font-weight: 400;
      }

      span {
        display: block;
        margin: 1px 0 5px;
        color: #bababa;
        font-size: 14px;
      }
    }
  }

  .singer, .album {
    margin: 10px;

    a {
      color: #0c73c2;
    }
  }

  .lyric {
    margin-top: 13px;
    padding: 30px 0 50px;

    .lyric-info {
      .text {
        margin: 6px 0;
      }
    }

    .lyric-control {
      position: relative;
      color: #0c73c2;
      background-color: #fff;
      cursor: pointer;

      i {
        position: absolute;
        width: 11px;
        height: 8px;
        right: -12px;
        top: 2px;
        background-position: ${props => props.isSpread ? "-45px" : "-65px"} -520px;
      }
    }
  }
`
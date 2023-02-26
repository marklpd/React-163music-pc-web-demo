import styled from "styled-components";

export const PlayBarWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 53px;
  background-position: 0 0;
  background-repeat: repeat;

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    transform:translateX(-50%);
    bottom: 0;
    height: 47px;
  }
`

export const Control = styled.div`
  display: flex;
  width: 137px;
  height: 47px;
  padding-top: 6px;

  button {
    cursor: pointer;
  }

  .pre,.next {
    width: 28px;
    height: 28px;
    margin: 5px 8px 0 0;
  }

  .pre {
    background-position: 0 -130px;
    :hover {
      background-position: -30px -130px;  
    }
  }

  .play {
    width: 36px;  
    height: 36px;
    margin-right: 8px;

    background-position: 0 ${props => props.isPlaying ? "-165px" : "-204px"};
    :hover {
      background-position: -40px ${props => props.isPlaying ? "-165px" : "-204px"};
    }
  }

  .next {
    background-position: -80px -130px;
    :hover {
      background-position: -110px -130px;
    }
  }
`
export const PlayInfo = styled.div`
  display: flex;
  width: 642px;
  height: 47px;
  
  .image {
    position: relative;
    width: 34px;
    height: 34px;
    margin: 6px 15px 0 0;
    border-radius: 5px;

    .mask {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 34px;
      height: 35px;
      background-position: 0 -80px;
    }
  }

  .play {
    flex: 1;
    color: #a1a1a1;

    .info {
      display: flex;
      color: #e1e1e1;
      margin-top: 5px;

      .song-name {
        color: #e8e8e8;
      }

      .singer-name {
        color: #9b9b9b;
        margin-left: 15px;
      }

      .link {
        width: 14px;
        height: 15px;
        margin-left: 13px;
        background-position: -110px -103px;
        :hover {
          background-position: -130px -103px;
        }
      }
    }

    .progress {
      display: flex;
      align-items: start;

      .ant-slider {
        width: 466px;
        margin: 0;
        margin-right: 10px;

        .ant-slider-rail {
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png")}) right -30px;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${require("@/assets/img/progress_bar.png")}) left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -7px;
          background: url(${require("@/assets/img/sprite_icon.png")}) 0 -250px;

          :hover {
            background: url(${require("@/assets/img/sprite_icon.png")}) 0 -280px;
          }
        }
      }

      .time {
        .divider {
          margin: 0 3px;
        }
        .total-time {
          color: #797979;
        }
      }
    }
    
  }
  
`

export const Operator = styled.div`
  display: flex;
  height: 47px;

  .btn {
    width: 25px;
    height: 25px;
    margin: 11px 2px 0 0;
    cursor: pointer;
  }

  .left {
    width: 87px;

    .icn-pip {
    background: url(${require("@/assets/img/icn-pip.png")}) 0 0;
      :hover {
        background-position-y: -25px;
      }
    }

    .favor {
      background-position: -88px -163px;
      :hover {
        background-position: -88px -189px;
      }
    }

    .share {
      background-position: -114px -163px;
      :hover {
        background-position: -114px -189px;
      }
    }
  }

  .right {
    display: flex;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -238px;

    .volume {
      background-position: -2px -248px;
      :hover {
        background-position: -31px -248px;
      }
    }
   
    .loop {
      background-position: ${props => {
    switch (props.sequence) {
      case 1:
        return "-66px -248px";
      case 2:
        return "-66px -344px";
      default:
        return "-3px -344px";
    }
  }};
      :hover {
        background-position: ${props => {
    switch (props.sequence) {
      case 1:
        return "-93px -248px";
      case 2:
        return "-93px -344px";
      default:
        return "-33px -344px";
    }
  }};
      }
    }

    .add {
      width: 59px;
      height: 36px;

      .playlist {
        width: 59px;
        height: 25px;
        margin-top: 11px;
        padding-left: 21px;
        text-align: center;
        color: #666;

        background-position: -42px -68px;
        :hover {
          background-position: -42px -98px;
        }
      }
    }
  }
`
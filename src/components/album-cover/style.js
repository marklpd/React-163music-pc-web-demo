import styled from "styled-components";

export const AlbumWrapper = styled.div`
  .album-img {
    position: relative;
    width: ${props => props.width + "px"};
    height: ${props => props.size + "px"};
    overflow: hidden;
    margin-bottom: 7px;
    
    .cover {
      position: absolute;
      top: 0;
      left: 0;
      width: 118px;
      height: 100px;
      background-position: 0 ${props => props.bgp};
    }
  }

  .album-info {
    font-size: 12px;
    width: ${props=>props.size + "px"};

    p {
      width: 90%;
      line-height: 18px;
    }

    .name {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .artist {
      color: #666;
    }
  }
`


import request from './axios';

export function getTopBanners() {
  return request({
    url: "/banner"
  })
}

export function getHotRecommends(limit) {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}

export function getNewAlbums() {
  return request({
    url: "/album/newest"
  })
}

export function getTopList(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}

export function getSettleSingers(cat, limit) {
  return request({
    url: "/artist/list",
    params: {
      cat,
      limit
    }
  })
}
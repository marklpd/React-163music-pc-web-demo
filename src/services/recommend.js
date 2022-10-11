import request from './axios';

export function getTopBanners() {
  return request({
    url: "/banner"
  })
}
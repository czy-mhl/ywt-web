import request from '@/utils/request'

export function userRegister(obj) {
  return request({
    url: '/user/register',
    method: 'post',
    data: obj
  })
}

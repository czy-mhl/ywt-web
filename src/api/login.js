import request from '@/utils/request'

export function login(userName, pwd) {
  return request({
    url: '/user/login',
    method: 'post',
    data: {
      username: userName,
      password: pwd
    }
  })
}

export function getInfoUpdate() {
  return request({
    url: '/member/memberInfo/update',
    method: 'post'
  })
}

export function getInfo() {
  return request({
    url: '/user/info',
    method: 'post'
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}

import request from '@/utils/request'

export function findByUserId(userId) {
  return request({
    url: '/user/waterbill/' + userId,
    method: 'get'
  })
}

export function findBybillMonth(billMonth) {
  return request({
    url: '/user/billdetails/' + billMonth,
    method: 'get'
  })
}


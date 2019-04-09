import axios from 'axios'
import Qs from 'qs'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  transformRequest: [function (data) {
    data = Qs.stringify(data);
    return data;
  }],
  timeout: 15000, // 请求超时时间
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});

// request拦截器
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['user_token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
);

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code === 1004 || res.requestId === '1004') {
      Message({
        message: '会话已失效，请重新登录',
        type: 'error',
        duration: 1500,
        onClose: function () {
          store.dispatch('FedLogOut').then(() => {
            location.reload()// 为了重新实例化vue-router对象 避免bug
          })
        },
      });
      return Promise.reject('error')
    } else {
      return res
    }
  },
  error => {
    console.log(error);
    Message({
      message: '系统异常，请联系管理员',
      type: 'error'
    });
    return Promise.reject(error)
  }
);

export default service

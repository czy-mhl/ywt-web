import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api的base_url
  timeout: 15000, // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
  config => {
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
    // if (res.code === 1004 || res.requestId === '1004') {
    //   Message({
    //     message: '会话已失效，请重新登录',
    //     type: 'error',
    //     duration: 1500,
    //     onClose: function () {
    //       store.dispatch('FedLogOut').then(() => {
    //         location.reload()// 为了重新实例化vue-router对象 避免bug
    //       })
    //     },
    //   });
    //   return Promise.reject('error')
    // } else {
    //   return res
    // }
    return res
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

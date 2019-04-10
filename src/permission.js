import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // 验权

const whiteList = []; // 不重定向白名单
//
const getFlagJudge = function(to, next, flag) {
  if (to.matched.some(record => record.meta.register)) {
    if (!flag.isRegister) {
      console.log('未注册');
    }
  } else if (to.matched.some(record => record.meta.bind)) {
    if (!flag.isBind) {
      console.log('未绑定');
      next('/user/bind')
    }
  } else {
    next()
  }
}

router.beforeEach((to, from, next) => {
  NProgress.start();
  if (whiteList.indexOf(to.path) !== -1) {
    next()
  } else {
    const flag = store.getters.flag
    console.log(Object.keys(flag).length);
    if (Object.keys(flag).length === 0) {
      store.dispatch('Login').then(() => {
        getFlagJudge(to, next, flag)
      })
    } else {
      getFlagJudge(to, next, flag)
    }
  }
  /*if (getToken()) {
    if (to.path === '/login') {
      next('/')
    } else {
      if (store.getters.purviews.length === 0) { // 判断当前用户是否已拉取完user_info信息
        store.dispatch('GetInfo').then(res => { // 拉取用户信息
          const purviews = res.data
          store.dispatch('GenerateRoutes', { purviews }).then(() => { // 生成可访问的路由表
            router.addRoutes(store.getters.addRouters); // 动态添加可访问路由表
            next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
          })
        }).catch(() => {
          store.dispatch('FedLogOut').then(() => {
            Message.error('获取用户信息异常')
            next('/login')
          })
        })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }*/
});

router.afterEach(() => {
  NProgress.done(); // 结束Progress
});

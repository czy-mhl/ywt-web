import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { Message } from 'element-ui'
import { getToken } from '@/utils/auth' // 验权

const whiteList = ['/login', '/register', '/recover']; // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start();
  next()
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

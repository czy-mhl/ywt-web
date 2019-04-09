import { asyncRouterMap, constantRouterMap, endRouterMap } from '@/router';

function getMenuTree(purview) {
  const array = []
  if (purview.children.length > 0) {
    purview.children.forEach(item => {
      const obj = {
        path: item.purviewValue,
        name: item.componentName,
        component: () => import(`@/views/${item.componentPath}`),
        meta: { title: item.purviewName, icon: item.purviewIcon },
        children: getMenuTree(item)
      }
      array.push(obj)
    })
  }
  return array
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: [],
    sidebarItemMap: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers.concat(endRouterMap);
      state.routers = constantRouterMap.concat(routers).concat(endRouterMap);
      state.sidebarItemMap = constantRouterMap.concat(routers).concat(endRouterMap);
    },
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      const purviews = JSON.parse(data.purviews)
      return new Promise(resolve => {
        const accessedRouters = []
        purviews.forEach(purview => {
          const obj = {
            path: purview.purviewValue,
            component: () => import('@/views/layout/Layout'),
            meta: { title: purview.purviewName, icon: purview.purviewIcon },
            alwaysShow: true,
            children: getMenuTree(purview)
          }
          accessedRouters.push(obj)
        })
        commit('SET_ROUTERS', accessedRouters);
        resolve();
      })
    },
  }
};

export default permission;

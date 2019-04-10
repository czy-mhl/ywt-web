import { login, logout, getInfo, getInfoUpdate } from '@/api/login'

const user = {
  state: {
    flag: {}
  },

  mutations: {
    SET_FLAG: (state, data) => {
      state.flag = {
        isRegister: data.register,
        isBind: data.bind
      }
    }
  },

  actions: {
    // 登录
    Login({ commit }, state) {
      return new Promise((resolve, reject) => {
        const data = {
          register: true,
          bind: false
        }
        commit('SET_FLAG', data)
        resolve()
      })

      /*return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          if (response.code !== 200) {
            resolve(response)
          } else {
            const data = response.data;
            setToken(data);  //将token存储在cookie中
            commit('SET_TOKEN', data);
            resolve(response)
          }
        }).catch(error => {
          reject(error)
        })
      })*/
    },
    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo().then(response => {
          commit('SET_PURVIEWS', response.data)
          commit('SET_AVATAR', 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif')
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
  }
}

export default user

/** Create by jjh on 2018/4/18：09：47 */
import Cookies from 'js-cookie'

const dialog = {
  state: {
    showItem: false,
    eidtItem: false,
    deleteItem: false
  },
  mutations: {
    SET_SHOWITEM: state => {
      Cookies.set('showItem', state.showItem)
    },
    SET_EIDTITEM: state => {
      Cookies.set('eidtItem', state.eidtItem)
    },
    SET_DELETEITEM: state => {
      Cookies.set('deleteItem', state.deleteItem)
    }
  },
  actions: {
    SHOWCPMMIT: ({ commit }) => {
      commit('SET_SHOWITEM')
    },
    EIDTCPMMIT: ({ commit }) => {
      commit('SET_EIDTITEM')
    },
    DELETECPMMIT: ({ commit }) => {
      commit('SET_DELETEITEM')
    }
  }
}

export default dialog

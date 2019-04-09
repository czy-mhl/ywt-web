const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  purviews: state => state.user.purviews,
  addRouters: state => state.route.addRouters
}
export default getters

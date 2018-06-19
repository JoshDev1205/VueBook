import { store }  from '../store/main.js'

export default (to, from, next) => {
  if (store.getters.user) {
    next()
  } else {
    next('/')
  }
}

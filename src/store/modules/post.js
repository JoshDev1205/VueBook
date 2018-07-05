import { db } from '../config/config.js'
export default {
  state : {
    posts: null
  },

  mutations: {
    setPosts(state, payload) {
      state.posts = payload
    },

    setNewPost(state, payload) {
      state.posts.push(payload)
    }
  },

  actions: {
    getAllPosts({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
      db.collection('posts').doc(`${ payload }`).onSnapshot((doc) => {
        if(doc.exists) {
          const data = doc.data()
          commit('setPosts', data.posts)
        } else {
          console.log('No such document')
        }
      })
    },

    addNewPost({ commit, state }, payload) {
      commit('setNewPost', payload.message)
      db.collection('posts').doc(`${payload.uid}`).update({
        posts: state.posts
      })
      .then(res => console.log('Message Posted'))
      .catch(
        error => {
          commit('setLoading', false)
          commit('setError', error)
      }
      )
    }
  },

  getters: {
    posts (state) {
      return state.posts
    }
  }
}

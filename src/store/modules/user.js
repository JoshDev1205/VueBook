import { auth, db } from '../config/config.js'
export default {
  state: {
    user: null
  },

  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },

  actions: {
    signUserIn ({ commit }, payload) {
      commit('setLoading', true)
      commit('clearError')
      auth.signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const User = {
              'uid': user.user.uid,
              'email': user.user.email,
              'friends': null
            }
            db.collection('users').doc(`${user.user.uid}`).get()
            .then( doc => {
              if (doc.exists) {
                console.log("Document data:", doc.data())
                const data = doc.data()
                User.friends = data.friends
                commit('setUser', User)
                console.log(User)
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
            })
            .catch (
              error => {
                commit('setLoading', false)
                commit('setError', error)
            })
            commit('setLoading', false)
        })
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
        })
    },
    autoSignIn ({commit}, payload) {
      const User = {
        'uid': payload.uid,
        'email': payload.email,
        'friends': null
      }
      db.collection('users').doc(`${payload.uid}`).get()
            .then( doc => {
              if (doc.exists) {
                console.log("Document data:", doc.data())
                const data = doc.data()
                User.friends = data.friends
                commit('setUser', User)
                console.log(User)
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
            })
            .catch (
              error => {
                commit('setLoading', false)
                commit('setError', error)
            })
    },
    logout ({commit}) {
      auth.signOut()
      commit('setUser', null)
    }
  },

  getters: {
    user (state) {
      return state.user
    },
    isLoading (state) {
      return state.isLoading
    }
  }
}

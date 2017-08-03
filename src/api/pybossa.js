import axios from 'axios'
import store from '@/store'
import config from '@/config'
import manageSession from '@/utils/manageSession'

const instance = axios.create({
  baseURL: config.pybossaHost,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 30000,
  data: {}  // Must always be set otherwise Content-Type gets deleted
})

instance.interceptors.response.use((r) => {
  manageSession(store, document.cookie)
  return r
})

// Handle errors
instance.interceptors.response.use(undefined, (error) => {
  const notification = { msg: error.message, type: 'error' }
  store.dispatch('NOTIFY', notification)
})

// Forward unauthenticated users to signin page
// instance.interceptors.response.use((r) => {
//   if (r.data.template === 'account/signin.html') {
//     store.commit('DELETE_ITEM', 'currentUser')
//     // TODO: Handle this
//   }
//   return r
// }, function (error) {
//   console.error(error.response)
//   return Promise.reject(error)
// })

export default instance

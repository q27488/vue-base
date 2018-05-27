import Vue from 'vue'
import store from '../store'

export default {
  addCounter(body={}, context = '') {
    return (context ? context.$http : Vue.prototype.$http)({
      url: 'mock/add-counter',
      method: 'get',
    }).then(rep => {
      const {status, data} = rep
      if (status === 200 && data.errno === 0) {
        return data.data
      } else {
        console.error(rep)
      }
    }, respond => {        // 错误处理
      console.log(respond)
    })
  },

  reduCounter(body={}, context = '') {
    return (context ? context.$http : Vue.prototype.$http)({
      url: 'mock/redu-counter',
      method: 'get',
    }).then(rep => {
      const {status, data} = rep
      if (status === 200 && data.errno === 0) {
        return data.data
      } else {
        console.error(rep)
      }
    }, respond => {        // 错误处理
      console.log(respond)
    })
  },


}

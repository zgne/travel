// import Vue from 'vue'
// import Vuex from 'vuex'
//
// Vue.use(Vuex)
//
// export default new Vuex.Store({
//   state: {
//     city: '北京'
//   }
// })
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)



export default new Vuex.Store({
  state: state,
  // 非异步，可以直接调用commit
  // actions: {
  //   changeCity(ctx, city) {
  //     // console.log(city);
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations: mutations
})


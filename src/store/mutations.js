export default {
  changeCity(state, city) {
    state.city = city
    try{
      localStorage.city = city
    }catch (e) {}
  },
  changeId(state,id){
    state.id = id
    try{
      localStorage.id = id
    }catch(e){}
  }
}

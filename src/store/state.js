let defaultCity = '上海'
let defaultId = '0001'
try{
  if(localStorage.city){
    defaultCity = localStorage.city
  }
  if(localStorage.id){
    defaultId = localStorage.id
  }
}catch(e){}

export default {
  city: defaultCity,
  id: defaultId
}


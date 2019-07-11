var mongoose = require('mongoose');
mongoose.set('userCreateIndex', true);

var UserSchema = new mongoose.Schema({
  username: {type: String, require: true, index: {unique: true}},
  password: {type: String, require: true},
  email: {type:String, require: true, index: {unique: true}},
  data: { type: Date, default: Date.now()  },
});

var UserModel = mongoose.model('user', UserSchema);
UserModel.createIndexes();

var save = (data)=>{
  var user = new UserModel(data);
  return user.save()
    .then(()=>true)
    .catch(()=>false)
};

module.exports = {
  save,
};


var { Email } = require('../utils/config');
var UserModel = require('../models/users');

var login = async (req, res, next) => {

};

var register = async (req, res, next) => {
  // res.send(UserModel);
  var { username, password, email, verify } = req.body;
  // console.log(email);
  console.log(req.session);
  console.log(req.session.id);
  // console.log(verify);
  console.log(req.session.email);
  if(email !== req.session.email || verify !== req.session.verify){
    res.send({
      msg: "验证码错误",
      status: -1
    });
    return;
  }

  var result = await UserModel.save({
    username,
    password,
    email
  });
  if(result){
    res.send({
      msg: '注册成功',
      status: 0
    })
  }else{
    res.send({
      msg: '注册失败',
      status: -2
    })
  }

};

var verify = async (req, res, next) => {

  var email = req.query.email;
  var verify = Email.verify;
  req.session.email = email;
  // req.sessionStorage.verify = verify;
  console.log(req.session);
  console.log(req.session.id);
  // req.session.save();

  var mailOption = {
    from: "轻旅验证码 1169264363@qq.com",
    to: email,
    subject: '轻旅验证码',
    text: '验证码:' + verify + req.session.email + req.session.verify
  };
  Email.transporter.sendMail(mailOption, (err) => {
    if (err) {
      res.send({
        msg: '验证码发送失败',
        status: -1
      })
    } else {
      res.send({
        msg: '验证码发送成功',
        status: 0
      })
    }
  })
};


var logout = async (req, res, next) => {

};

var getUser = async (req, res, next) => {

};

var findPassword = async (req, res, next) => {

};

module.exports = {
  login,
  register,
  verify,
  logout,
  getUser,
  findPassword
}

const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    trim: true, // 스페이스를 없애주는 역할
    unique: 1
  },
  password: {
    type: String,
    maxlength: 50
  },
  role: {
    type: Number, // number : 1 ; 관리자 /0 ; 일반 유저 같이..
    default: 0
  },
  image: String,
  token: { // 유효성 관리
    type: String
  },
  tokenExp: { // 토큰의 유효기간
    type: Number
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User // 다른 곳에서도 쓸 수 있도록 이 모듈을 export



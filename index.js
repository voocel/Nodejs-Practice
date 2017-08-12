var express = require('express');
var router = express.Router();
//mongodb
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
        
var conn = mongoose.connect('mongodb://127.0.0.1:27017/lzh', { useMongoClient: true });

//连接成功
mongoose.connection.on('connected', function () {    
  console.log('Mongoose connection ok');  
});
//连接异常
mongoose.connection.on('error',function (err) {    
  console.log('Mongoose connection error: ' + err);  
}); 

// 连接断开
 mongoose.connection.on('disconnected', function () {    
  console.log('Mongoose connection disconnected');  
}); 

var classSchema = new mongoose.Schema({
    name: String,
    email: String,
});
var classModel = mongoose.model('user', classSchema); //user为数据库集合

/* GET index listing. */
router.get('/', function (req, res, next) {
  // let newStudent = [{
  //   name: '小明',
  //   studentId: '001'
  // }];
  // classModel.create(newStudent, (err) => {
  //   if (err) return console.log(err)
  //   res.send("添加成功!")
  // });
  classModel.findOne({name:"123"}, function (err,user,users) {
      console.log(user);
      console.log(user.name);
      res.render('index', {title: 'Express', user: user });
  });
});

router.get('/a', function (req, res, next) {
  res.render('aaa');
});

module.exports = router;

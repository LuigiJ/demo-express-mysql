module.exports = {
  search: function(req, res, next) {
    req.getConnection(function (err, conn) {
      if (err) {
        return next(err);
      } else {
        conn.query('select * from test', [], function (err, result) {
          if (err) {
            return next(err);
          } else {
            res.json(result); //可以直接把结果集转化Json返回给客户端
          }
        });
      }
    });
  },
  add: function(req, res, next){
    console.log(req.body.name);
    req.getConnection(function (err, conn) {
      if (err) {
        return next(err);
      } else {
        conn.query('insert into test(name) values(?)', [req.body.name], function (err, result) {
          if (err) {
            return next(err);
          } else {
            if (result.affectedRows > 0) res.json({code: 1, msg: '添加成功'});
            else res.json({code: 0, msg: '添加失败'}) 
          }
        });
      }
    });   
  }
}
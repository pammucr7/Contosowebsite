var express = require('express');
var app = express();



var customerController=function (req, res) {
  console.log("Customer detail");
  var customers=[
            {firstName:'pramod',lastName:'desai',account_type:'saving',acc_no:"1234556",company:"infoway"},
			{firstName:'Rahul',lastName:'shahane',account_type:'saving',acc_no:"45631456",company:"Amdocs"},
			{firstName:'vinod',lastName:'Rane',account_type:'current',acc_no:"45631455",company:"infosis"},
      ];
  res.send(customers);
};



app.get('/customers',customerController );

var server = app.listen(8000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://localhost:8088", host, port)
})
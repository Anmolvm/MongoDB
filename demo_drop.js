var http= require('http');
var MongoClient=require('mongodb').MongoClient;
var url= "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err,db){
	//var myquery={name:"HAHA"};
	db.collection("customers").drop(function(err,obj){
		if(err) throw err;
		if(obj) console.log("1 ite deleted");
		db.close();
	});
});
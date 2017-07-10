var http=require('http');
var MongoClient=require('mongodb').MongoClient;
var url="mongodb://localhost:27017/mydb";

MongoClient.connect(url,function(err,db){
	if(err) throw err;
	var query = {address: "Park lane 38"};
	db.collection("customers").find().toArray(function(err,result){
		if(err) throw err;
		console.log(result);
		db.close();
	});
});
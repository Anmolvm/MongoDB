var MongoClient=require('mongodb').MongoClient;
var url='mongodb://localhost:27017/mydb';

MongoClient.connect(url,function(err,db){
	if(err) throw err;
	db.collection("customers").findOne({},function(err,result)
		{
			if(err) throw err;
			console.log(result.name);
			console.log(result.address);
			db.close();
		});
});
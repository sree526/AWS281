
/*
 * GET users listing.
 */
var mysql = require('mysql');
exports.list = function(req, res){
  res.send("respond with a resource");
};
exports.signup=function(req,res){
	var con = mysql.createConnection({
		  host     : 'mysql2.cf0nl4bnjdro.us-west-2.rds.amazonaws.com',
		  user     : 'root',
		  password : 'sreekar26',
		  port     : '3306',
		  database : 'cmpe281'
		});
	con.connect();
	console.log(req.body);
	var user={
			"firstname":req.body.firstname,
			"lastname":req.body.lastname,
			"location":req.body.location,
			"password":req.body.password,
			"status":"offline"
	};
	con.query('INSERT INTO user SET ?', user, function(err,result) {
	  if (!err){
	    res.send("success");
	  }
	    else{
		  res.send("not found");	  
	  }	 
	});
	con.end();
};

exports.logout=function(req,res){
	
	var con = mysql.createConnection({
		  host     : 'mysql2.cf0nl4bnjdro.us-west-2.rds.amazonaws.com',
		  user     : 'root',
		  password : 'sreekar26',
		  port     : '3306',
		  database : 'cmpe281'
		});
	con.connect();
	var user=req.session.user;
	  var sql="update user set status=? where firstname=?";
	  var variables=['offline',req.session.username];
	  sql=mysql.format(sql,variables);
	  console.log(sql);
	  con.query(sql,function(err,rows,fields){
		console.log("hello");
		  if(!err){
			console.log('success');
			req.session.destroy();
			res.send("success");			
		}
		else{
			res.send("error updating status");
		}
	
});
};
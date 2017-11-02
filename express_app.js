var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('view engine','ejs');
app.use('/assests', express.static('assests'));


app.get('/',function(req , res){
    res.render('index');
});

var urlEncodedParser = bodyParser.urlencoded({ extended: false });

app.get('/contact',function(req , res){
  console.log(req.query);
   res.render('contact',{qs: req.query});
});

app.post('/contact',urlEncodedParser, function(req , res){
  console.log(req.body);
   res.render('contact-sucess',{data: req.body});
});



app.get('/profile/:name', function(req, res){
    var data = {age: 22 , job : 'Software Engineer', hobbies:['Lodo Star',
    'Cricket','Football'] }

   res.render('profile',{person: req.params.name, data: data });
});


app.listen(3000);

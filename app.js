var express = require ('express');
var bodyParser = require('body-parser');
var cors = require ('cors');

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/:date', function(req, res){
    
     var date = req.params.date;
     var dateOptions = {
         year: 'numeric',
         month: 'long',
         day: 'numeric'
    }; 
    
    if(isNaN(date)){
        var naturalDate = new Date(date);
        var unixDate = new Date(date).getTime()/1000;
         naturalDate = naturalDate.toLocaleDateString('en-us', dateOptions);

    }
    else{
        var unixDate = date;
        var naturalDate = new Date(date * 1000);
        naturalDate = naturalDate.toLocaleDateString('en-us', dateOptions);

    }
   res.json({unix:unixDate, natural: naturalDate});
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server connected!");
})



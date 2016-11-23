var filesYo = require('fs');
var https =  require('https');
filesYo.writeFile(__dirname + "/travel-singlepage.html", "<h4>Test</h4>");

var zadarurl = "https://commons.wikimedia.org/wiki/File:Narodni_trg_Zadar.jpg";
var zadarimg = filesYo.createWriteStream(__dirname + "/zadar1.jpg");
var request = https.get(zadarurl, function(response){
response.pipe(zadarimg);
});


var mysql = require('mysql');

var con = mysql.createConnection({
host: "magnesium",
user: "a16mpollanen",
database: "ska16mpollanen",
password: "salasana"
});

con.connect(function(err) {
if (err) throw err;
console.log("Yhdistetty!");

});
//net start MongoDB
//mongo

var bodyParser = require("body-parser"),
    express = require("express"),
    mongoose = require("mongoose"),
    app = express();

mongoose.connect("mongodb://localhost/teretane-proba");
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));


var gymSchema = new mongoose.Schema({
name: String,
phone: String,
street: String,
area: String,
city: String
});

var Gym = mongoose.model("Gym", gymSchema);


// Gym.create ({
//     name: "This is a title",
//     phone: "phone",
//     street: "This is a post!!!",
//     area: "This is a area!!!",
//     city: "city"
//    
// });

app.get("/", function(req, res) {
    res.redirect("/index");
});

app.get("/index", function (req, res){
    Gym.find({}, function (err, gyms){
        if (err) {
            console.log(err);
        } else {
            res.render("index", {gyms:gyms});
        }
    })
   
});


app.listen(3000, function () {
  console.log('Listening on port 3000!')
});
/*

app.js file does all the set-up
app.js passes the routing to the controllers folder
app.js starts the server

*/

const express = require("express")
const bodyparser = require("body-parser")
const hbs = require("hbs")
const mongoose = require("mongoose")
const session = require("express-session")

const app = express()

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost:27017/notes", {
  useNewUrlParser:true
})
app.set("view engine", "hbs")
app.use(express.static(__dirname + "/public"))

app.use(session({
  secret : "secret",
  name : "secretname",
  resave: true,
  saveUninitialized :true
}))

app.use(require("./controllers"))

app.listen(3000)

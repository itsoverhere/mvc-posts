const express = require("express")
const router = express.Router()
const app = express()
const Post = require("../models/post")

// load all the controllers into router
router.use("/post", require("./post"))
router.use("/user", require("./user"))

// create the route for the index/home page
router.get("/", function(req, res){
  console.log("GET /")
  Post.getAll().then((posts)=>{
    res.render("index", {
      posts
    })
  })

})

module.exports = router

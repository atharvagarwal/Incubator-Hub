const mongoose = require("mongoose");

const BlogSchema = mongoose.Schema({
    tag:{
        type : String,
    },
    title : {
        type : String,
    },
    msg :{
        type : String
    }
})
module.exports = mongoose.model('Blog', BlogSchema);

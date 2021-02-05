const mongoose= require("mongoose");

const todoSchema= new mongoose.Schema({

    name: {type:String, required:true, minlength: 6, maxlength:30},
    date: {type: Date, default: Date.now}
})


const Todo= mongoose.model("todo", todoSchema);

module.exports=Todo;
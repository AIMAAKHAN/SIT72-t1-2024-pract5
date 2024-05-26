const express=require("express");
const app =express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const mycontroller=require('./Controller/controller');



app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect('mongodb://localhost:27017/hotelsystem')
const notesSchema={
    firstName:String,
    email:String,
    message:String

}
app.use('/form',mycontroller);
const Note =mongoose.model("Note",notesSchema);
app.get("/",function(req,res){
    res.sendFile(__dirname +"/index.html");
})
app.post("/",function(req,res){
    let newNote=new Note({
        fisrtName:req.body.firstName,
        email:req.body.email,
        message:req.body.message
    });
    newNote.save();
    res.redirect('/');
})
//routers get, listen 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.listen(5500,function(){
    console.log("server is running on 5500");
})

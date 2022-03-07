const express = require("express")

const app =express();

app.use(logger);

app.get("/books", (req, res)=>{
return res.send({ route: "/books"})

})

app.use(checkPermission);

app.get("/libraries", (req, res)=>{
return res.send({ route: "/libraries", permission: true})

})

app.get("/authors", (req, res)=>{
return res.send({ route: "/authors", permission: true})

})

function logger(req, res, next){
   
    console.log("route handler")
    next();
}



function checkPermission(req, res, next){

    if(req.path==="/libraries"){
     req.role = "librarian";
     permission:true;
    }
     if(req.path==="/authors"){
       req.role = "author"
       permission:true
    }
    next()
}


app.listen(3000,()=>{
    console.log("Listening on port 3000")
})

































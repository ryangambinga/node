const express = require('express');
const app = express();


app.get('/',(req,res)=>{

    res.send("Welcome Ryan Bro")
})

app.listen(3000,()=>{

    console.log(" Hey itss Ryan");
});

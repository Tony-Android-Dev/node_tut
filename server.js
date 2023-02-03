const express = require('express');

const app = express()

const PORT = process.env.PORT || 5000

app.get('/',(req,res)=>{

    res.send("<h1>API running</h1>")


})

app.listen(PORT,()=>{

    console.log(`server running at:${PORT}`)


})
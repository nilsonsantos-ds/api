const express = require('express')
const app = express()
const {MongoClient} = require('mongodb')
const dotenv = require('dotenv')
dotenv.config()
const url = process.env.DATABASE_URL
const ObjectId = require("mongodb").ObjectId

app.set('view engine', 'ejs')
app.get('/', (req, res) =>{
    res.render('index.ejs')
})
app. get('/', (req,res)=> {
    res.send('ola gente')
})



app.listen(3000, function(){
    console.log("O nosso servidor está na porta 3000")
})



app.get('/ler', (request, response)=> {
    response.send('Olá, mundo')
})


MongoClient.connect(url, (err, crient) =>{
    if(err) return console.log(err)
        db = crient.db('teste-bd')
    app,listen(3000, ()=>{
        console.log("servidor rodando tranquilo")
    })
})
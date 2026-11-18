const express = require('express')
const app = express()
const {MongoClient} = require('mongodb')
const dotenv = require('dotenv')

app.set('view engine', 'ejs')
app.get('/', (req, res) +>{
    res.render('index.ejs')
})
app. get('/', (req,res)=> {
    res.send('ola gente')
    



app.listen(3000, function(){
    console.log("O nosso servidor está na porta 3000")})



app.get('/ler', (request, response)=> {
    response.send('Olá, mundo')
})
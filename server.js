const express = require('express')
const api = express()
const exibir = require('ejs')
const executar = require('nodemon')
const mongodb = require('mongodb')
const dotenv = require('dotenv')
const driveMD = "mongodb+srv://<db_username>:<db_password>@josenilson.25b5ma3.mongodb.net/?appName=josenilson"

api.listen(3000, function(){
    console.log("O nosso servidor está na porta 3000")})



api.get('/ler', (request, response)=> {
    response.send('Olá, mundo')
})
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const http = require('http')
const routes = require('./routes')
const { setupWebsocket } = require('./websocket')

const app = express()
const Server = http.Server(app)

setupWebsocket(Server)

mongoose.connect('mongodb+srv://omnistack:omnistack123@cluster0-zmuh1.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)

Server.listen(3333)

//teste

//query params: request.query ?key=value
//route params: request.params
//body: request.body 
/*
app.get('/', (request, response) => {
    console.log(request.query)
    return response.json({message: "Hello Omnistack 123"})
})

app.get('/teste/:id', (request, response) => {
    console.log(request.params)
    console.log(request.params.id)
    return response.json({message: "Hello Omnistack 123"})
})

app.post('/teste', (request, response) => {
    console.log(request.body)
    return response.json({message: "Hello Omnistack 123"})
})*/
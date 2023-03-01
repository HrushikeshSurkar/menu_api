const express = require('express')
const mongoose = require('mongoose')

const url = 'mongodb+srv://Hrushikesh:Hrushikesh_123@cluster0.wnkx44y.mongodb.net/menu?retryWrites=true&w=majority'
const app = express()
mongoose.set('strictQuery', false);
mongoose.connect(url, { useNewUrlParser: true }).then(() => {
    console.log("connection Successfully");
}).catch((err) => console.log("no connection"));
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const menuRoutes = require('./routes/menus')
app.use('/menus', menuRoutes)

app.listen(9000, () => {
    console.log('Server started')
})

const express = require('express')
const app = express()

app.set('view engige', 'ejs')

app.use(express.urlencoded({extended:false}))
app.use(express(express.json))

app.use('/', require('./router'))

app.listen(3000, ()=>{
    console.log("ta corriendo pa http://localhost:3000")
})
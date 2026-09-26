const express = require('express')
// const usersRouter = require('./routes/users')

const app = express()

// app.use('/users', usersRouter)

app.listen(3000, () => {
    console.log("listening at 3000")
})
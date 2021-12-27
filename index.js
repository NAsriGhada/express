const express = require ('express')

//const req = require('express/lib/request')
const path = require ('path')

const app = express()

const members = [
    {
        id: 1,
        name: "John Doe",
        email: 'john@gmail.com',
        status: "active"
    },
    {
        id: 2,
        name: "Bob Williams",
        email: 'bob@gmail.com',
        status: "inactive"
    },
    {
        id: 3,
        name: "Shanon Jackson",
        email: 'shanon@gmail.com',
        status: "active"
    },
]

app.get('/api/members', (req, res) => {
    res.json(members)
})

/*app.get('/', (req, res) => {
    res.send('<h1>Hello world!!!</h1>')
})*/

/*app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public',  'index.html' ))
})*/

app.use(express.static(path.join(__dirname, 'public')))


const PORT = process.env.PORT || 5000

app.listen(PORT, () => (`server started on ${PORT}`))
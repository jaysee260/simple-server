const express = require('express')
const app = express()

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/index', { title: 'Simple Server' })
})

app.get('/:username', (req, res) => {
    const username = req.params.username
    res.render('pages/user', { title: 'User Page', username })
})

const PORT = 4020
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
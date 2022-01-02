const express = require('express')
const cors = require('cors')
// const {getPlantsBack} = require('./controller')
const ctrl = require('./controller')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/api/plants', ctrl.getPlantsBack)

app.listen(4000, () => console.log('server running on 4000'))
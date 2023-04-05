import express from "express"
import {dirname, join} from 'path'
import { fileURLToPath } from "url"

import indexRoutes from './routes/index.js'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(express.static('public'))
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(indexRoutes)

app.listen(3000)


console.log('Conexion entrate en el puerto 3000')

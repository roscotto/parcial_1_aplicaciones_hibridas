import express from 'express'
import gamesRoutes from './routes/gamesRoutes.js'
import judgesRoutes from './routes/judgesRoutes.js'
import cors from 'cors'

app.use(cors()) // permite que cualquier persona se conecte a mi api
const app = express()

app.use(express.json()) // interpreta el body cuando viene un json

app.use(gamesRoutes)
app.use(judgesRoutes)

app.listen(2222, () => {
  console.log(`estas conectado al puerto 2222`)
})
import express from 'express'
import gamesRoutes from './routes/gamesRoutes.js'
import judgesRoutes from './routes/judgesRoutes.js'


const app = express()

app.use(express.json()) // interpreta el body cuando viene un json

app.use(gamesRoutes)
app.use(judgesRoutes)

app.listen(2222, () => {
  console.log(`estas conectado al puerto 2222`)
})
import express from 'express'
import proyectosRoutes from './routes/proyectosRoutes.js'
import vistasProyectosRoutes from './routes/vistasProyectosRoutes.js'

const app = express()

app.use(express.json()) // interpreta el body cuando viene un json

app.use(proyectosRoutes)
app.use(vistasProyectosRoutes)

app.listen(2222, () => {
  console.log(`estas conectado al puerto 2222`)
})
import express from 'express'
import router from './routes/dataRequestor.js'

const app = express()

app.use(`/public`, express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))
app.use('/character', router)


app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
})

const PORT = process.env.PORT || 4001
    
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})


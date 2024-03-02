import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())


app.use((error, req, res, next) => {
  console.log('handle error')
  res.status(500).json({ok: false, message: error.message})
})

app.get('/api', (req, res) => {
  console.log(req.user)
  res.json(req.user)
})

app.get('/owner', (req, res)=>{
  res.json({owner: 'daniil.shapovalov200247@gmail.com'})
})


app.listen(4000)
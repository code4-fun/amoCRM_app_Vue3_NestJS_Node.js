import express from 'express'
import mongoose from 'mongoose'
import router from './src/router/index.js'
import 'dotenv/config'
import cookieParser from 'cookie-parser'

const PORT = process.env.PORT || 5000
const app = express()

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', process.env.CLIENT_URL)
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,ngrok-skip-browser-warning')
  res.setHeader('Access-Control-Allow-Credentials', true)
  next()
})
app.use(express.json())
app.use('/api', router)
app.use(cookieParser())

const startApp = async () => {
  try{
    await mongoose.connect(process.env.DB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    })
    app.listen(PORT, () => console.log('started'))
  } catch(e){
    console.log(e)
  }
}

startApp()

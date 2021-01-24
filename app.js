// 載入 express
const express = require('express')
const mongoose = require('mongoose')

const app = express()

const port = 3000

mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})
// 設定首頁路由
app.get('/', (req, res) => {
  res.send('doing')
})

// 設定 port
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})
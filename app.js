// 載入 express
const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')

const app = express()

const port = 3000
// 資料庫設定
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

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
// 設定首頁路由
app.get('/', (req, res) => {
  res.render('index')
})

// 設定 port
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})
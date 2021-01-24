// 載入 express
const express = require('express')
const app = express()
const port = 3000
// 設定首頁路由
app.get('/', (req, res) => {
  res.send('doing')
})

// 設定 port
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})
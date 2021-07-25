const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://YJ:dbswn7413@cluster0.kvhlq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
  // 이것들이 안 쓰면 에러가 뜰 수 있음. 
}).then(() => console.log('MongoClient connected... '))
  .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})





app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
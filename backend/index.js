const express = require("express")
var cors = require('cors')
const path = require("path")
const bodyParser = require('body-parser')
const app = express();
app.use(cors())
// Statics
app.use(express.static('static'))

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, 'static')))

app.use(bodyParser.urlencoded({ extended: false}));
// Config Router
// routers
const subjectRouter = require('./routes/subject')
const registerRouter = require('./routes/register')
const userRouter = require('./routes/user')
const adminRouter = require('./routes/admin')


app.use(subjectRouter);
app.use(registerRouter);
app.use(userRouter);
app.use(adminRouter);


app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})
const express = require("express");
const path = require('path');
 require('dotenv').config({path:path.join(__dirname,'.env')})
const main_routes = require('./routes/main_routes');

const app = express();


app.use('/',main_routes)
const PORT=process.env.PORT || 2555
app.listen(2555, () => {
    console.log("im working on 2555");
});

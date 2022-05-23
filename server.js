const express = require('express');
const app = express();
const port = 3000;
const pool = require('./db.js');
const router = require('./routers');

app.use(express.json());
app.use("/api/product",router);
app.listen(port,()=>{
    console.log(`Listen ${port}`);
})

// db lam theo squelize
// midleware <- rác gửi controller, error handle

require("./db/mongoose");

const commonRouter = require("./routers/common");


const express = require("express");

const app = express();
const port = 3004;

app.use(express.json());
app.use('/common', commonRouter);

app.listen(port,()=> {
    console.log("server is up and running on port "+port);
});
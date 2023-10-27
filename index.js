const res = require('express/lib/response');
const app = require('./app');
const db = require('./config/db');
const UserModel = require('./model/user_model')

const port = 3000;

app.get('/',(req,res)=>{
    res.send("Helloo Alll....");
});

app.listen(port,()=>{
    console.log(`Server listening on Port http://localhost:${port}`);
});
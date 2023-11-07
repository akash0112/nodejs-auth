const mongoose = require('mongoose')



const dbConn = ()=>{
    mongoose.connect('mongodb://localhost:27017').then(()=>{
    console.log('database connected');
}).catch((err)=>{
    console.log(err);
})
}

module.exports = dbConn
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);


const db = () => {
    mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
        console.log("mongoDB connect");
    }).catch((err)=>{
        // throw new Error(err.message)
        console.log(err);
    })
}

module.exports = db
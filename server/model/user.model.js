const mongoose = require('mongoose')


const User = new mongoose.Schema({
    Email :{type:String, required:true, unique:true},
    Password: {type:String, required: true}

},
{ collection: 'user-data' }
)

const model = mongoose.model('UserData',User);

module.exports= model;
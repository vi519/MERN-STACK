const mongoose = require('mongoose')

const dbConnect= async ()=>{

    try {
        await  mongoose.connect('mongodb://localhost:27017/fhir-db', { useNewURLParser:true })
        console.log("Database is connected")
    }

    catch(error) {
        console.log("Database is not connected, Please Try Again",error)
    }
     
}

module.exports= dbConnect;
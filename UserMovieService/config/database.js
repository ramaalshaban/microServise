const mongose = require("mongoose");

const {MONGO_URI} = process.env;

exports.connect = () => {

    mongose.connect('mongodb://localhost:27017/moviedb', 
    {
        

    }).then(()=> {

        console.log('Successfully connected to the db')

    }).catch(()=>{
        console.log('error');
        console.log(error)
        process.exit(1)
    })

}
const { default: mongoose} = require("mongoose")


const dbconnect = () => {
    try{
        const conn = mongoose.connect(process.env.MONGODB_URL,{
            useNewUrlParser: true, 
    useUnifiedTopology: true,
    family: 4,
        })
        console.log('Database connection Success');     
    }catch (error) {
        console.log('Database error');
    }
    };

    module.exports = dbconnect

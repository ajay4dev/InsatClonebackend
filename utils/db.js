const mongoose = require("mongoose");


const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://urajayk:ajay123@cluster0.oejmyoj.mongodb.net/")
        console.log(`mongodb connected successfully.`);
    } catch (error) {
         console.log(error);
         
    }
}

module.exports = connectDB;
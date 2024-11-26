const {v2 : cloudinary} = require("cloudinary");
const dotenv = require("dotenv")
dotenv.config({});

cloudinary.config({
    cloud_name: "de3afenus",
    api_key: "656829541249677",
    api_secret: "aHhr6CiSWR0awltMedbOKnnH_8k"
})

module.exports = cloudinary
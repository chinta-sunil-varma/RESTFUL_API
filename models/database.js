const mongoose = require("mongoose");


main().catch((err) => console.log(err));

async function main() {
    
    await mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true});
    console.log("connection to db is madee succesfuly");
}

const model = new mongoose.Schema({
    "": Number,
    ID: Number,
    NAME: String,
    SGPA: Number,
    CGPA: Number,
});

const auth_model = new mongoose.Schema({
    user: String,
    pass: String,
    api:String,
});
const apiList=new mongoose.Schema({
    api:String,
})
const mod1 = mongoose.model("mod1", model, "sem1");
const mod2 = mongoose.model("mod2", model, "sem2");
const mod3 = mongoose.model("mod3", model, "sem3");
const auth_mod = mongoose.model("auth_mod", auth_model);
const api_model = mongoose.model("api_model", apiList);
module.exports={mod1:mod1,mod2:mod2,mod3:mod3,auth_mod:auth_mod,api_model:api_model}
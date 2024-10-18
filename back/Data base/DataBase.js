import mongoose from "mongoose";

export const ConnectDataBase=async (req,res)=>{
try {
    await mongoose.connect( "mongodb+srv://ouladsmaneissam:BGAIsFDbSrRilVlY@cluster0.8yai4.mongodb.net/db2")
} catch (error) {
    console.log("problem in connection " +error)
}

}
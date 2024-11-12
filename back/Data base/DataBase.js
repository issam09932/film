import mongoose from "mongoose";

export const ConnectDataBase=async (req,res)=>{
try {
    await mongoose.connect( )
} catch (error) {
    console.log("problem in connection " +error)
}

}

import user from "../models/User.js";
export default async function Admin(req,res,next){
    const id=req.UserId
    const IsAdmin = await user.findOne(id)
    if (IsAdmin.Role === "Admin") {
        res.send({message:"you are the admin"})
        next()
    } else {
        res.send({message:"you are not the admin"})

    }
}
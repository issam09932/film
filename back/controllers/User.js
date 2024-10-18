import user from "../models/User.js";

export async function GetUsers(req,res){
    const users =await user.find()
    res.send(users)
}

export async function GetUserById(req,res){
    const UserId= await user.findById(req.params.id)
    if(UserId){
        res.send(UserId)
    }else{
        res.send({message:`${UserId} doesn't exist`})
    }
}
export async function DeleteUser(req,res){
try {
    const Delete =await user.findByIdAndDelete(req.params.id)
    res.send({message:`user` + DeleteUser.name + "by successed"})
} catch (error) {
    res.send({message:"this user doesn't exist"+error})
}    
}

export const UploadUser= async (req,res)=>{
try {
    const OldUser = await user.findByIdAndUpdate(
        req.params.id,
        req.body
    )
  res.send({message:"the changes made by successed"})
} catch (error) {
    res.send({message:"changes has been failed"+error})
}
}

export const Signin =async (req,res)=>{
    const NewUser = req.body;
    const {Password}=NewUser;
    const HashedPassword = bcrypt.hash(Password,12);
    try {
        const Create =await user.create({
            ...NewUser,
            Password:HashedPassword,
        })
        res.send({message:`Welcom with us ${NewUser.Name}` })
    } catch (error) {
        res.send({message:"something wrong happened"+error})
    }

}

export const Login= async (req,res)=>{
    const {Eamil,Password} =req.body;
    const ExistUser=await user.findOne({Eamil})
    if (!ExistUser) {
        res.send({message:"Wrong Email"})
    }
        const VerifyPassword = await bcrypt.compare(Password,user.Password) ;
        if (VerifyPassword) {
            const Token=jwt.sign({UserId :user.id},"securise",{expireIn:"2d"})
            res.send({message:"Login",user,Token})
        } else {
        res.send({message:"wrong password"})
        }
}
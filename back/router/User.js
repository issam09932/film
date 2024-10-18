import express from "express";
import { 
    DeleteUser,
     GetUserById,
      GetUsers,
       Login,
        Signin,
         UploadUser
         } from "../controllers/User.js";

const UserRouter=express.Router()
UserRouter.get("/",GetUsers)
UserRouter.get("/:id",GetUserById)
UserRouter.put("/:id",UploadUser)
UserRouter.delete("/:id",DeleteUser)
UserRouter.post("/Login",Login)
UserRouter.post("/Signin",Signin)

export default  UserRouter;
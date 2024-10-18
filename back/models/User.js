import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    FamilyName: {
        type: String,
        required: true,
    },
    Age: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
        unique: true,
    },
    Password: {
        type: String,
        required: true,
        minLength: 8,
    },
    DateOfBirth: {
        type: Date,
        required: true,
    },
   
    Role: {
        type: String,
        enum: ["admin", "standard"],
        default: "standard",
    },
});

const User = mongoose.model("User", userSchema);

export default User;

import mongoose from "mongoose";

const User = mongoose.model("User", {
    name : String,
    email : String,
    senha : String,
});

export default User
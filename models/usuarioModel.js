import mongoose from "mongoose";

const User = mongoose.model("User", {
    name : String,
    email : String,
    senha : String,
});

module.exports = User
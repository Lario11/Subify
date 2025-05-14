import mongoose from "mongoose";


// Define the user schema
// The schema defines the structure of the user document in the MongoDB database
const userSchema = new mongoose.Schema({  
    name: {
        type: String,
        required: [true, 'User Email is required'],
        trim: true,
        minLength: 3,
        maxLength: 50,
    },
    email: {
        type: String,
        required: [true, 'User Email is required'],
        trim: true,
        lowercase: true,
        unique: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/, 'Please fill a valid email address'],
    },
    password: {
        type: String,
        required: [true, 'User Password is required'],
        minLength: 6,
    }
  }, { timestamps: true });
 
  const User = mongoose.model('User', userSchema);

  export default User;

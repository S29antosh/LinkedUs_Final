import mongoose from "mongoose";
const { Schema } = mongoose;
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


let token ="";
//schema

let SECRETE_KEY = "asdfghjklqwertyuiopzxcvbnmqwerrttyuioasdfghjjkl";

//schema is the structure of json document
//userSchema is instance
const userSchema = new mongoose.Schema({
  //object
  name: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  repassword: {
    type: String,
    required: false,
  },
  skill: {
    type: String,
    required: false,
  },
  basicInfo: {
    type: String,
    required: false,
  },

  roles: {
    type: String,
    required:false,
  },
     image: {
      data: {
        type: String,
        required: false
      },
      contentType: {
        type: String,
        required: false
      }
    },
    
  //array of object
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});
//we are hashing the password
userSchema.pre("save", async function (next) {
  if (this.isModified("password") && this.password && this.repassword) {
    this.password = await bcrypt.hash(this.password, 12);
    this.repassword = await bcrypt.hash(this.repassword, 12);
  }
  next();
});

//workking wid instances then we use methods
//we are genetrating a token
//normal arrow as it doesnt work with this
userSchema.methods.generateAuthToken = async function () {
  try {
    //finally genetrating a token
    //payload-unique,secretkey
    //here this._id is referreing to the email of login
    //object id converting into string 
    token = jwt.sign({ _id: this._id.toString() }, SECRETE_KEY);
    //to add the token in database from token
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    console.log(token);
   
    return token;
  } catch (err) {
   
    
   console.log("the error part"+err);
  }
};

  
userSchema.methods.userid= async function()
{
  try{
    const decoded = jwt.verify(token, SECRETE_KEY);
    const userId = decoded._id;
    console.log(userId);
    User.findById(userId, "name email")
  .then(user => 
    {
    if (!user)
    {
      console.log("User not found");
    
    }

    const { name, email } = user;
    console.log("Name:", name);
    console.log("Email:", email);
  })
  .catch(err => {
    console.error(err);
  })
 

        return  userId ;
  }
  catch(err){
    console.log(err);

  }
  
  }


const User = mongoose.model("User", userSchema);

export default User;

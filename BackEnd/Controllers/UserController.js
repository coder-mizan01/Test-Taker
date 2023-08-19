
import dotenv from 'dotenv';
dotenv.config();
import JWT from 'jsonwebtoken';

import Users from "../Models/UserModel.js";
import { comparePassword, hashPassword } from '../Helpers/AuthHelper.js';

const registerController = async(req,res) => {
  try {
     const {email,password} = req.body

     if(!email && !password){
      res.status(404).send({
        success : false,
        message : 'please fill all the field'
      })
     }


     //check existing user

      const existingUser = await Users.findOne({email : email});

      if(existingUser){
        res.status(201).send({
          success : false,
          message : 'already resgister please login'
        })
      }

    //making password hashed

    const hashedPassword = await hashPassword(password);

      //Register a user;

      const registerUser = await Users({email,password:hashedPassword})

        await registerUser.save();

      res.status(201).send({
        success : true,
        message : 'user is created',
      })

  } catch (error) {
     res.status(500).send({
      success : false,
      message : 'serve has a problem with registerController'
     })
  }
}

const loginController = async (req,res) => {
    try {
      const {email,password} = req.body;

      //if does not find a user

      const user = await Users.findOne({email : email});
      if(!user){
        res.status(404).send({
          success : false,
          message : 'no user exist in this email'
        })
      }

      //matching password

      const matchPassword = await comparePassword(password,user.password);

      //if does not match password
      if(!matchPassword){
        res.status(404).send({
          success : false,
          message : 'password does not match'
        })
      }

      //create a token
      const token = await JWT.sign({id : Users._id},process.env.JWT_SECRET,{expiresIn : '7d'});

      //if find user and match password
      if(user && matchPassword){
         res.status(201).send({
          success : true,
          message : 'welcome',
          User : {
            email : user.email,
            token
          }
         })
      }
      
    } catch (error) {
       res.status(500).send({
        success : false,
        message : 'server has crashed in loginController'
       })
    }
}

const userController = (req,res) => {
    try {
      res.send('dasdasdads')
    } catch (error) {
      console.log(error);
    }
}

export {registerController,loginController,userController}
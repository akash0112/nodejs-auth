const {authModel} = require('../models/index')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const loginAuthService=async(userData)=>{
    const user = await authModel.findOne({username:userData.username})
    if(!user)
    {
        throw new Error('User not found')
    }
    const passwordMatch = await bcrypt.compare(userData.password,user.password)
    if(!passwordMatch)
    {
        throw new Error('Incorrect Password')
    }
    const token = jwt.sign({
        username: user,
    },  'your-secret-key')
  
    user.token = token
    return user.save()

}

const signUpAuthService=async (userData)=>{
    const existingUser = await authModel.findOne({email:userData.email});
    if (existingUser) {
      throw new Error('User Exist');
    }
    const saveuser = new authModel(userData)
    return saveuser.save()
   

}





module.exports=
{
    loginAuthService,
    signUpAuthService
}
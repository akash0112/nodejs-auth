const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const schema = mongoose.Schema
const model = mongoose.model

const UserSchema = new schema({
    username: { 
        type: String,
         required: true,
          unique: true 
        },
    email: { 
        type: String,
         required: true,
          unique: true },
    password: { 
        type: String,
         required: true
         },
    token: { type: String },
})

UserSchema.pre("save",async function (next){
    const user = this
    if(!user.isModified("password"))
    {
        return next()
    }
    try {
       
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(user.password,salt)
        user.password = hashedPassword
        next()
    } catch (error) {
        return next(error);
    }
    })

const UserModel = model('Users', UserSchema)

module.exports = UserModel
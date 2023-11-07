const {authService} = require('../services/index')
const authLoginController = async (req, res) => {

   try {
    const user = await authService.loginAuthService(req.body);
    res.status(200).json({ user:user});
   } catch (error) {
    res.status(400).json({ message: error.message });
   }

};


const authSignupController=async (req,res)=>{

try {
    const user = await authService.signUpAuthService(req.body);
    res.status(201).json({ message: 'User registered successfully', user }); 
} catch (error) {
    res.status(400).json({ message: error.message });
}

}

module.exports={
    authLoginController,
    authSignupController
}

const userModel=require('../models/user.model')


module.exports.createUser=async({firstname,lastname,email,password})=>{
    if(!firstname || !email || !password ){
        throw new Error('All fields are required')
    }
    const user = await userModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password
    });
    const userWithoutPassword = await userModel.findById(user._id).select('-password');
    return userWithoutPassword
    

}
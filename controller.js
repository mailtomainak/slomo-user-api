const user = require('./UserSchema').model;
const registerUser = require('./RegisterUserSchema').model;
const  ObjectId = require('mongoose').Types.ObjectId; 
async function getUser(req, res) {
    try {

        const userData = await user.findOne({
            userId: new ObjectId(req.userId)
        })
        if (!userData) {
            res.status(404).send(null);
        } else {
            res.status(200).send(userData);
        }

    } catch (e) {
        
        res.status(500).send('Auth Error');
    }

}

async function saveUserName(userData){
    const user =new registerUser({
        userId:userData.userId,
        username:userData.username
    })

    try{
        await user.save();
    }
    catch (e){
        throw e;
    }
}

async function saveUser(req, res) {
    const userFormData = req.body; 
    const userData = new user({
        firstName:userFormData.firstName,
        lastName:userFormData.lastName,
        phone:userFormData.phone,
        acceptTerms:userFormData.acceptTerms,
        isActive: false
    });
    try {
        const userSavedResponse = await userData.save();
        res.status(201).send(userSavedResponse);
    } catch (e) {
        res.send(500);
    }
}
module.exports = {
    getUser,
    saveUser,
    saveUserName
}

//     deactivateUser:deactivateUser
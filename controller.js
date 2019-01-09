const user = require('./UserSchema').model;
const registerUser = require('./RegisterUserSchema').model;

async function getUser(req, res) {
    try {

        const userData = await user.findOne({
            userId: req.userId
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
   
    const userData = new user({
        userId:req.body.userId,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        contactNumber:req.body.contactNumber,
        emailId:req.body.emailId,
        isActive: false
    });
    try {
        const userSavedResponse = await userData.save();
        console.log(userSavedResponse);
        res.status(201).send('Created');
    } catch (e) {
        console.log(e);
        res.send(500);
    }
}
module.exports = {
    getUser,
    saveUser,
    saveUserName
}

//     deactivateUser:deactivateUser
const user = require('./UserSchema').model;


async function getUser(req, res) {
    try {

        const userData = await user.findOne({
            userId: req.userId
        })
        if (!userData) {
            res.status(404).send(null);
        } else {
            res.status(200).send({});
        }

    } catch (e) {
        console.log(e);
        res.status(500).send(e)
    }

}


async function saveUser(req, res) {
    console.log(req.body)
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
    getUser: getUser,
    saveUser: saveUser
}

//     deactivateUser:deactivateUser
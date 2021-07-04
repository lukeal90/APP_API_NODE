const UserService = require('../services/user');
const bcryptjs = require('bcryptjs');
const  { generateJwt, ERROR } = require('../../helpers')

const login = async (req, res, next) => {
    try {
        const {
            email,
            passwd
        } = req.body;
        
        const user = await UserService.checkEmail(email);
        if (!user) {
            return res.status(400).json({
                msg: ERROR.INVALID_USER_PASS
            })
        }
        if (user.deleted) {
            return res.status(400).json({
                msg: ERROR.USER_INACTVE
            })
        }
        const validatePasswd = bcryptjs.compareSync(passwd, user.passwd);
        if (!validatePasswd) {
            return res.status(400).json({
                msg: ERROR.INVALID_USER_PASS
            })
        }

        const token = await generateJwt(user._id);
       
        res.send({
            user,
            token
        })

    } catch (error) {
        res.status(500).json({
            msg: ERROR.ERROR_LOGIN
        })
    }
}

module.exports = {
    login
}
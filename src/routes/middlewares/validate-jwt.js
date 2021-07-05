const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;
const User = require('../../models/user')
const Boom = require('@hapi/boom');
const TOKEN_HEADER = process.env.TOKEN_HEADER;
const {
    ERROR
} = require('../../../helpers')

const validateJWT = async (req, res, next) => {
    const token = req.header(TOKEN_HEADER)
    if (!token) {
        return res.status(401).json({
            msg: ERROR.UNAUTHORIZED
        })
    }
    try {
        const {
            _id
        } = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(_id);

        if (!user) {
            return res.status(401).json({
                msg: ERROR.INVALID_TOKEN_DB
            });
        }
        if (user.deleted) {
            return res.status(401).json({
                msg: ERROR.USER_INACTVE
            })
        }
        req.user = user;
        next();
    } catch (err) {
        res.status(401).json({
            msg: ERROR.LOGIN
        })
    }
}

module.exports = {
    validateJWT
}
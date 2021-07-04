const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;
const User = require('../../models/user')
const Boom = require('@hapi/boom');

const validateJWT = async (req, res, next) => {
    const token = req.header('x-token')
    if (!token) {
        return res.status(401).json({
            msg: "Unauthorized"
        })
    }
    try {
        const {
            _id
        } = jwt.verify(token, SECRET_KEY);
        const user = await User.findById(_id);

        if (!user) {
            return res.status(401).send(Boom.unauthorized("Invalid token - user doesn't exist in DB"));
        }
        if (user.deleted) {
            return res.status(401).json({
                msg: "Invalid token - user deleted: true"
            })
        }
        req.user = user;
        next();
    } catch (err) {
        res.status(401).json({
            msg: "Invalid token"
        })
    }
}

module.exports = {
    validateJWT
}
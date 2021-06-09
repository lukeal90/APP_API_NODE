const UserService = require('../services/user');
const bcryptjs = require('bcryptjs');
const {generateJwt} = require('../../helpers/generate-jwt')

const login = async (req, res, next) => {

    try {
        const {
            email,
            passwd
        } = req.body;
        
        const user = await UserService.checkEmail(email);
        // comprobamos el mail
        if (!user) {
            return res.send({
                msg: 'usuario / password no son validos'
            })
        }
        // comprobamos si esta activo
        if (!user.state) {
            return res.send({
                msg: 'usuario inactivo'
            })
        }
        // verificamos password
        const validatePasswd = bcryptjs.compareSync(passwd, user.passwd);
        if (!validatePasswd) {
            return res.status(400).json({
                msg: 'usuario / password no son validos'
            })
        }

        // Genero JWT

        const token = await generateJwt(user._id);
       
        res.send({
            user,
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Algo ocurrio y no pudo loguearse'
        })
    }
}

module.exports = {
    login
}
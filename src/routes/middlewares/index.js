const validateJWT  = require('../middlewares/validate-jwt')
const validate = require('../middlewares/validate');

module.exports = {
    ...validate,
    ...validateJWT
}
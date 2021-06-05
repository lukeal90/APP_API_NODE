

const login = (req, res, next) => {
    try{
        res.json({
            msg: 'login ok'
        })
    }catch (error) {
        next(error);
      }
    }

module.exports = {
    login
}
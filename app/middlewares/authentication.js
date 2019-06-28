const {User} = require('../models/user');
const authenticateUser = function(req,res,next){
    let token = req.header('x-auth');
    User.findByToken(token).then((user)=>{
        req.locals={
            token,
            user
        }
        next();
    }).catch((err)=>{
        res.send(401).status(err);
    });
};

const authorizeUser = function(req,res,next){
    if(req.locals.user.role == 'admin'){
        next();
    }else{
        res.status(403).send(err);
    }
}

module.exports = {
    authenticateUser,
    authorizeUser
}
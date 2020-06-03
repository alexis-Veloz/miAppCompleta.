module.exports={
    //PARA SABER SI ESTA LOGUEADO
    isLoggedIn(req, res, next){
        if(req.isAuthenticated()) {
            return next();
        }
        return res.redirect('/signin');
    },
    isNotLoggedIn(req, res, next){
        if(!req.isAuthenticated()) {
            return next();
        }
        return res.redirect('/profile');
    }
};
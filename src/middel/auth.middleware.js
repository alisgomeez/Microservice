export const isAuthenticated = (req, res, next) => {
    //exepciones para las rutas publicas (no pide autenticacion)
    const publicRoutes = ['/signup', '/signin'];

    if (publicRoutes.includes(req.path)) {
        return next();
    }

    if (req.isAuthenticated && req.isAuthenticated()) {
        return next();
    }

    res.redirect('/signin');
};

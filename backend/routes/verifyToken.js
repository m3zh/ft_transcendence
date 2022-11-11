const   jwt = require('jsonwebtoken');

function auth (req, res, next) {
    const token = res.header('auth-token');
    if (!token) return res.status(404).send('Access Denied');

    try {
        const verified = jwt.verify(token, process.env.SECRET_TOKEN);
        req.user = verified;
        next();
    } catch (error) {
        res.status(404).send('Invalid Token');
    }

}
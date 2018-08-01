/**
 * Auth-checker
 * 
 * Made by Jexulie
 * fejitj3n@yahoo.com
 * 
 */


/**
 * Check If User is Logged.
 * 
 * @param {string} successRoute optional? redirects to success route
 * @param {string} failRoute redirects to fail route
 * @public
 */

const Authchecker = (failRoute, successRoute = undefined) => {
    return function Authchecker (req, res, next) {
        return auth(req, res, next, failRoute, successRoute);
    }
}

/**
 * checks if user authenticated
 * @returns {boolean}
 * @param {object} req
 * @private
 */

function check(req){
    return req.isAuthenticated();
}

/**
 * 
 * @param {object} req 
 * @param {object} res 
 * @param {string} failRoute 
 * @param {string} successRoute
 * @private
 */

function auth(req, res, next, failRoute, successRoute){
    if(check(req)){
        if(typeof successRoute !== 'undefined'){
            return res.redirect(successRoute);
        }else{
            return next();
        }
    }else{
        return res.redirect(failRoute);
    }
}

module.exports = Authchecker;
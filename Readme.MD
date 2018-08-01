# auth-checker

Passport.js Authentication Checking Middleware.

Checks if user is authenticated and redirects to desired routes.

## Installation
```bash
$ npm install auth-checker
```

## Usage

```javascript
    var authchecker = require('auth-checker');

    // use middleware on routes to check authentication
    // (success route is optional)
    app.get('/myprecious', authchecker('/routeToHell', '/routeToMyPrecious'), (req, res) => {
        // do your stuff...
    }) ;
```

## License
[MIT](https://github.com/Jexulie/auth-checker/blob/master/LICENSE)

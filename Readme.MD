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

    // call middleware and enter routes.
    // (success route is optional)
    app.use(authchecker('/success', '/fail'));



    // use middleware on routes to check authentication
    app.get('/myprecious', authchecker, (req, res) => {
        // do your stuff...
    }) ;
```

## License
[MIT](https://github.com/Jexulie/auth-checker/blob/master/LICENSE)

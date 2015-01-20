Setup
=

The project is setup to use Bower and NPM

```
> npm run deps
```

Tests
=

Unit tests are run using Karma.

```
> npm test
...


```

Development
=

The development server is setup using Webpack

```
> npm start
Environment Development
...
Starting Webpack Development Server
Listening http://localhost:9000/webpack-dev-server/index.html
```

Production
=
Webpack bundles all the assets in production mode and Gulp creates unique file names for caching

```
npm run dist
...
Found 3 matching tests...
...
Environment Production
...
Starting selenium server in parallel mode...
...
> cd dist
> python -m SimpleHTTPServer
Serving HTTP on 0.0.0.0 port 8000
...
> open http://localhost:8000/
```

Sources
=
- https://github.com/petehunt/webpack-howto
- http://gaearon.github.io/react-hot-loader/
- https://github.com/shanewilson/react-webpack-example
- https://github.com/jeffling/angular-webpack-example
- https://github.com/kriasoft/react-starter-kit
- https://github.com/glebm/gulp-webpack-react-bootstrap-sass-template
- https://github.com/johnthethird/react-starter-template
- http://substantial.com/blog/2014/11/11/test-driven-react-how-to-manually-mock-components/#why-not-jest


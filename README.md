This react app contains smaller React demos. The goal is to understand React and Webpack via integration of existing demos into this project.

List of Demos
=
- Material UI Doc page (http://material-ui.com/)

Setup
=

Install npm packages, install selenium-standalone server, mkdir 'build/'
```
> npm run deps
```

Testing
=

Run tests

```
> npm run test
```

Run end-to-End tests

```
> npm run selenium
```

## Development

Static assets served from config/dev-server-public. It automatically recompiles when files are changed.

First run only:
```
# wait until this finishes.
> npm run hot-dev-server

# in new terminal
> npm run start-dev

> open http://localhost:8080/
```

All subsequent runs:
```
> npm run dev
> open http://localhost:8080/
```


Production compilation and server
=

TODO: add production steps


Sources of enlightenment
=
- https://github.com/callemall/material-ui
- https://github.com/webpack/react-starter
- https://github.com/rackt/react-router
- https://github.com/rackt/react-a11y
- https://github.com/petehunt/webpack-howto
- http://gaearon.github.io/react-hot-loader/
- https://github.com/shanewilson/react-webpack-example
- https://github.com/jeffling/angular-webpack-example
- https://github.com/kriasoft/react-starter-kit
- https://github.com/glebm/gulp-webpack-react-bootstrap-sass-template
- https://github.com/johnthethird/react-starter-template
- https://github.com/newtriks/generator-react-webpack
- https://github.com/TYRONEMICHAEL/react-component-boilerplate
- http://substantial.com/blog/2014/11/11/test-driven-react-how-to-manually-mock-components
- https://github.com/BinaryMuse/react-primer
- https://github.com/i-like-robots/react-tube-tracker
- https://github.com/petehunt/webpack-howto
- https://github.com/chadpaulson/react-isomorphic-video-game-search
- https://github.com/Izzimach/react-three
- https://github.com/jlongster/blog


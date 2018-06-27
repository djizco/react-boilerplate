# React Boilerplate

You can try out this project [here](http://react-boilerplate.surge.sh)

## Quick Start

#### for Development

```
brew install libpng (needed for .jpg images)
npm install
npm run dev
```

#### for Production

```
npm run prod
```

#### for Deploy (using surge)

```
npm install -g surge
npm run build
surge dist <custom-url>.surge.sh
(You may have to create an account)

```

#### Other Commands

```
npm start
npm test
npm run build
npm run test:verbose
npm run lint
npm run lint:fix
```

## Setup Instructions

To setup your own project, you will need to copy the contents of this project into a new repo.
You will need to update the content in these files to names of your project and yourself:

* package.json: name, version, description, repository, author, bugs, homepage,
* LICENSE: (update to your preferred license)
* client/index.html: description and title
* this README.md

This is also a good time to go through the included libraries to add or remove features that you want.

After this you can commit the files into a new repository and push up to your github.
You can now start updating files in your client to begin working on your own project!

## Features

* React 16
* Webpack 3 conveniently bundles your code for you.
* Babel lets you use ES6/7 features.
* Hot Module Reloading for JS and CSS makes development quick and easy.
* CSS pre-processor setup for LESS and SASS lets you keep your styles clean and organized.

## Updates

* Update to React 16
* Add Hot Module Reloader for JS and CSS.
* Add Webpack 3

## Code Structure

```
- client
  - assets
    - images
    - icons
  - components
    - components
    - elements
    - layouts
    - pages
    - sections
    - structures
  - store
    - actions
    - reducers
  - styles
  - utils
- server
  - config
  - routes
- test
  - client
  - server
- scripts
```

Component Heirarchy:

Layouts > Pages > Sections > Structures > Components > Elements

This is somewhat based on atomic design with names that make more sense for the web.
If you were to rename the element groups to the match atomic design it would look like this:

Environment > Pages > Templates > Organisms > Molecules > Atoms

Learn more about [atomic design](http://bradfrost.com/blog/post/atomic-web-design/).

## Technologies

[React](https://facebook.github.io/react/) - View Library

[React-Router](https://reacttraining.com/react-router/) - Routing Library for React

[Redux](http://redux.js.org/) - State Manager

[Redux-Persist](https://github.com/rt2zz/redux-persist) - Persistent State

[Webpack](https://webpack.github.io/) - Code Packager for React

[Express](http://expressjs.com/) - Node Framework

[Bulma](http://bulma.io/) - CSS Framework

[Material-UI](http://material-ui.com/) - React Element Library

[FontAwesome](http://fontawesome.io/) - Icons

[Ramda](http://ramdajs.com/) - Functional Library

[ESLint](http://eslint.org/) - Code Linter

[Code](https://github.com/hapijs/code) / [Lab](https://github.com/hapijs/lab) - JS Testing Framework

[Enzyme](https://github.com/airbnb/enzyme) - React View Testing

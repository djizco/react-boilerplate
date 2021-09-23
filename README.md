# React Boilerplate

You can try out this project [here](http://react-boilerplate.surge.sh)

## Requirements

* Operating System: MacOS or Linux
* [Node.js](https://nodejs.org/) (I recommend installing with [NVM](https://github.com/nvm-sh/nvm))

## Quick Start

#### Setup

```bash
npm install
```

#### for Development

```bash
npm start
```

#### for Production

```bash
npm install -g serve

npm run build
npm run serve
```

#### for Deployment (using surge)

```bash
npm install -g surge

npm run build
npm run deploy
# You may have to create an account

```

#### Other Commands

```bash
npm test
npm run test:watch
npm run test:verbose
npm run test:coverage
npm run lint
npm run lint:fix
```

## Setup Instructions

To setup your own project, you will need to copy the contents of this project into a new repo.
You will need to update the content in these files to names of your project and yourself:

* package.json: name, version, description, repository, author, bugs, homepage
* LICENSE: (update to your preferred license)
* client/index.html: description and title
* this README.md

This is also a good time to go through the included libraries to add or remove features that you want.

After this you can commit the files into a new repository and push up to your github.
You can now start updating files in your client to begin working on your own project!

## Features

* Webpack conveniently bundles your code for you.
* Babel lets you use ES6/7 features.
* Hot Module Reloading for JS and CSS makes development quick and easy.
* CSS pre-processor setup for LESS and SASS lets you keep your styles clean and organized.
* ESLint helps you maintain a high level of code quality.
* Jest and Enzyme give you a robust testing frame work to make sure your code works.

## Code Structure

```
- config
- scripts
- client
  - assets
    - images
    - icons
  - components
    - atoms
    - molecules
    - organisms
    - templates
    - pages
    - environment
  - hooks
  - store
    - actions
    - reducers
    - thunks
    - tests
  - styles
  - utils

```

Component Heirarchy:

Environment > Pages > Templates > Organisms > Molecules > Atoms

This is based on atomic design. Learn more about [atomic design](http://bradfrost.com/blog/post/atomic-web-design/).

## Technologies

[React](https://facebook.github.io/react/) - View Library

[React-Router](https://reacttraining.com/react-router/) - Routing Library for React

[Redux](http://redux.js.org/) - State Manager

[Redux-Persist](https://github.com/rt2zz/redux-persist) - Persistent State

[Webpack](https://webpack.github.io/) - Module Bundler

[Bulma](http://bulma.io/) - CSS Framework

[React Bulma Companion](https://github.com/djizco/react-bulma-companion) - Bulma Component Library

[Material-UI](http://material-ui.com/) - React Component Library

[FontAwesome](http://fontawesome.io/) - Icons

[Ramda](http://ramdajs.com/) - Functional Library

[date-fns](https://date-fns.org/) - Date Functions Library

[ESLint](http://eslint.org/) - Code Linter

[Jest](https://jestjs.io/) - Testing Framework

[Surge](https://surge.sh/) - Static Web Deployment

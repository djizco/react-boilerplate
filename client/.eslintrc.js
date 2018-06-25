const path = require('path');

module.exports = {
  "env": {
    "browser": true,
    "node": true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        _elements: path.resolve(__dirname, 'client/components/elements/'),
        _components: path.resolve(__dirname, 'client/components/components/'),
        _structures: path.resolve(__dirname, 'client/components/structures/'),
        _sections: path.resolve(__dirname, 'client/components/sections/'),
        _pages: path.resolve(__dirname, 'client/components/pages/'),
        _layouts: path.resolve(__dirname, 'client/components/layouts/'),
        _store: path.resolve(__dirname, 'client/store/'),
        _assets: path.resolve(__dirname, 'client/assets/'),
        _styles: path.resolve(__dirname, 'client/styles/'),
        _utils: path.resolve(__dirname, 'client/utils/'),
      }
    }
  },
  "extends": "airbnb",
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": false,
  },
  "plugins": ["react"],
  "rules": {
    // enable rules
    "react/jsx-key": 2,

    // override default options for rules from base configurations
    "eqeqeq": [2, "smart"],
    "max-len": [2, {"code": 120, "tabWidth": 2, "ignoreUrls": true}],
    "newline-per-chained-call": [2, {"ignoreChainWithDepth": 4}],
    "no-cond-assign": [2, "except-parens"],
    "no-multi-spaces": [2, {"exceptions": {
      "ImportDeclaration": true,
      "Property": true,
      "VariableDeclarator": true
    }}],

    "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx"] }],
    "react/jsx-closing-bracket-location": [2, { selfClosing: 'after-props', nonEmpty: 'after-props' }],

    // disable rules
    "arrow-parens": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-named-as-default": 0, // causes error with redux testing
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "no-confusing-arrow": 0,
    "no-nested-ternary": 0,
    "no-plusplus": 0,
    "no-shadow": 0,
    "no-underscore-dangle": 0,
    "object-curly-newline": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-boolean-value": 0,
  },
};

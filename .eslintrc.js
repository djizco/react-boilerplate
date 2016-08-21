module.exports = {
  "env": {
    "browser": true,
    "node": true
  },
  "extends": "airbnb",
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": false
  },
  "plugins": ["react"],
  "rules": {
    // enable additional rules

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
    "object-curly-spacing": [2, "always", {"objectsInObjects": false, "arraysInObjects": false}],
    "react/jsx-filename-extension": [2, { "extensions": [".js", ".jsx"] }],
    "react/jsx-closing-bracket-location": [2, { selfClosing: 'after-props', nonEmpty: 'after-props' }],

    // disable rules from base configurations
    "react/jsx-boolean-value": 0,
  }
};

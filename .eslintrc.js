module.exports = {
  "env": {
    "browser": true,
    "node": true
  },
  "extends": "standard",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "allowImportExportEverywhere": false
  },
  "rules": {
    // enable rules
    "no-var": 2,

    // redeclare defaults
    "comma-spacing": [1, { "before": false, "after": true }],

    // override defaults
    "arrow-body-style": [1, "as-needed", { "requireReturnForObjectLiteral": true }],
    "array-bracket-spacing": [1, "never"],
    "block-spacing": [1, "always"],
    "comma-dangle": [1, "only-multiline"],
    "func-call-spacing": 1,
    "eqeqeq": [2, "smart"],
    "indent": [1, 2, {"VariableDeclarator": 2}],
    "max-len": [1, {"code": 120, "tabWidth": 2, "ignoreUrls": true}],
    "newline-per-chained-call": [1, {"ignoreChainWithDepth": 4}],
    "no-cond-assign": [1, "except-parens"],
    "no-throw-literal": 2,
    "no-multi-spaces": [1, {"exceptions": {
      "ImportDeclaration": true,
      "Property": true,
      "VariableDeclarator": true
    }}],
    "no-multiple-empty-lines": 1,
    "no-trailing-spaces": 1,
    "no-unused-vars": [1, { "vars": "local", "args": "after-used" }],
    "object-curly-spacing": [1, "always", {"objectsInObjects": false, "arraysInObjects": false}],
    "quotes": [1, "single", {"avoidEscape": true, "allowTemplateLiterals": true}],
    "semi": [1, "always"],
    "space-before-blocks": [1, { "functions": "always", "keywords": "always", "classes": "always" }],
    "space-before-function-paren": [1, "never"],
    "space-in-parens": 1,
    "space-infix-ops": 1,
    "space-unary-ops": 1,
    "spaced-comment": [1, "always"],

    // disable defaults
    "brace-style": 0,
    "keyword-spacing": 0,
    "standard/object-curly-even-spacing": 0,
    "padded-blocks": 0
  }
};

module.exports = {
    "extends": "airbnb",
    "rules": {
        // enable additional rules

        // override default options for rules from base configurations
        "no-cond-assign": ["error", "except-parens"],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/jsx-closing-bracket-location": [1, { selfClosing: 'props-aligned', nonEmpty: 'after-props' }],
        // ""

        // disable rules from base configurations
    },
    "plugins": ["react"]
};

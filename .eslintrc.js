module.exports = {
    "env": {
        //"browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
      "plugin:react/recommended",
      "eslint:recommended",
      "airbnb"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"

    ],
    "parser": "babel-eslint",
    "rules": {
      "prop-types": 0,
      // "semi": ["error", "always"],
      // "quotes": ["error", "double"],
      //"react/jsx-uses-react": "error",
      //"react/jsx-uses-vars": "off",
      // "no-unused-vars": "off",
      // "no-console":"off",
      // "react/prop-types":"off",
      // "react/jsx-no-comment-textnodes":"off",
      "spaced-comment": ["error", "always", { "exceptions": ["/*", "//"] }],
      "react/jsx-pascal-case":1,
      "import/no-unresolved":0,
      "indent":0,
      "comma-dangle":0,
      "arrow-body-style":0,
      "implicit-arrow-linebreak":0,

    },
};

module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        'airbnb',
        'prettier',
        'prettier/react'
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    parse: 'babel-eslint',
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        'prettier'
    ],
    "rules": {
        'prettier/prettier': 'error',
        'react/jsx0filename-extension': [
            'warn',
            { extensions: ['jsx', 'js'] }
        ],
        'import/prefer-default-export': 'off'
    }
};

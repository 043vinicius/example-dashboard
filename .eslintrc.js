module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/essential',
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'strict': [2, 'global'],
        'import/no-dynamic-require': [
            0,
        ],
        'import/prefer-default-export': [
            0,
        ],
        'vue/multi-word-component-names': [
            0,
        ],
        'no-underscore-dangle': [
            0,
            {
                'allowAfterThis': true,
                'allowAfterSuper': true,
            },
        ],
        'no-param-reassign': [
            0,
        ],
        'object-shorthand': [
            'warn',
        ],
        'arrow-body-style': [
            'warn',
            'as-needed',
        ],
        'indent': [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        'linebreak-style': [
            0,
        ],
        'quotes': [
            'warn',
            'single',
        ],
        'semi': [
            'error',
            'always',
        ],
        'max-len': [
            0,
            120,
            4,
        ],
        'padded-blocks': [
            0,
        ],
        'comma-dangle': ['error', {
            'arrays': 'always-multiline',
            'objects': 'always-multiline',
            'imports': 'always-multiline',
            'exports': 'always-multiline',
            'functions': 'ignore',
        }],
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)',
            ],
            env: {
                jest: true,
            },
        },
    ],
};

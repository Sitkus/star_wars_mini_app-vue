module.exports = {
    root: true,
    env: {
        browser: true,
        es6: true,
        node: true
    },
    extends: ['plugin:vue/essential', 'eslint:recommended'],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        quotes: ['error', 'single', { allowTemplateLiterals: true, avoidEscape: true }],
        semi: ['error', 'always'],
        'no-unused-vars': 'off',
        'no-console': 'off',
        'no-v-html': 'off'
    },
    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
            env: {
                jest: true
            }
        }
    ]
};

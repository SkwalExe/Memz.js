import ts from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

export default ts.config(
    ...ts.configs.recommended,
    eslintConfigPrettier,
    // If ignores is used without any other keys in the configuration object, then the patterns act as global ignores.
    // ref: https://eslint.org/docs/latest/use/configure/configuration-files#globally-ignoring-files-with-ignores
    {
        ignores: ['dist/**/*']
    },
    {
        rules: {
            'prefer-arrow-callback': 'error',
            'func-style': ['error', 'expression'],
            'no-trailing-spaces': 'error',
            'no-multiple-empty-lines': 'error',
            'camelcase': 'error',
            'default-case-last': 'error',
            'eqeqeq': 'error',
            'no-var': 'error',
            'yoda': 'error',
            'array-bracket-spacing': 'off',
            'array-element-newline': ['error', 'consistent'],
            'arrow-spacing': ['error', { before: true, after: true }],
            'comma-spacing': ['error', { before: false, after: true }],
            'linebreak-style': ['error', 'unix'],
            'spaced-comment': ['error', 'always'],
            'no-unused-vars': 'off'
        }
    }
)

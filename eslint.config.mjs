import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        files: ['**/*.ts', 'eslint.config.mjs'],
        rules: {
            'indent': 'off', // conflicts with prettier
            'eol-last': 'error',
            'quotes': 'off', // conflicts
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
            'comma-dangle': 'off', // conflicts
            'comma-spacing': ['error', { before: false, after: true }],
            'linebreak-style': ['error', 'unix'],
            'spaced-comment': ['error', 'always'],
            'no-unused-vars': 'off',
        },
    },
)

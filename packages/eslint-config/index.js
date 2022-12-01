module.exports = {
    env: {
        es6: true,
        node: true,
        browser: true
    },
    plugins: ['unicorn', 'tailwindcss'],
    extends: [
        'standard',
        'plugin:import/recommended',
        'plugin:jsonc/recommended-with-jsonc',
        'plugin:tailwindcss/recommended'
    ],
    settings: {
        'import/resolver': {
            node: { extensions: ['.js', '.mjs', '.ts', '.d.ts'] }
        }
    },
    overrides: [
        {
            files: ['*.json', '*.json5'],
            parser: 'jsonc-eslint-parser',
            rules: {
                'quotes': ['error', 'double'],
                'quote-props': ['error', 'always'],
                'comma-dangle': ['error', 'never']
            }
        },
        {
            files: ['package.json'],
            parser: 'jsonc-eslint-parser',
            rules: {
                'jsonc/sort-keys': [
                    'error',
                    {
                        pathPattern: '^$',
                        order: [
                            'name',
                            'version',
                            'description',
                            'keywords',
                            'license',
                            'repository',
                            'funding',
                            'author',
                            'type',
                            'files',
                            'exports',
                            'main',
                            'module',
                            'unpkg',
                            'bin',
                            'scripts',
                            'husky',
                            'lint-staged',
                            'peerDependencies',
                            'peerDependenciesMeta',
                            'dependencies',
                            'devDependencies',
                            'eslintConfig'
                        ]
                    },
                    {
                        pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
                        order: { type: 'asc' }
                    }
                ]
            }
        }
    ],
    rules: {
        // import
        'import/order': 'error',
        'import/first': 'error',
        'import/no-mutable-exports': 'error',

        // Common
        'semi': ['error', 'never'],
        'quotes': ['error', 'single', { avoidEscape: true }],
        'indent': [
            'error', 4,
            {
                SwitchCase: 1,
                VariableDeclarator: 1,
                outerIIFEBody: 1
            }
        ],
        'quote-props': ['error', 'consistent-as-needed'],
        'array-bracket-spacing': ['error', 'never'],
        // 'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
        'curly': ['error', 'multi-or-nest', 'consistent'],
        'block-spacing': ['error', 'always'],
        'comma-spacing': ['error', { before: false, after: true }],
        'comma-style': ['error', 'last'],
        'comma-dangle': ['error', 'never'],
        'no-debugger': 'error',
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'no-cond-assign': ['error', 'always'],
        'func-call-spacing': ['error', 'never'],
        'key-spacing': [
            'error',
            {
                beforeColon: false,
                afterColon: true
            }
        ],
        'no-use-before-define': [
            'error',
            {
                functions: false,
                classes: false,
                variables: true
            }
        ],
        'no-restricted-syntax': ['error', 'DebuggerStatement', 'LabeledStatement', 'WithStatement'],
        'object-curly-spacing': ['error', 'always'],
        'space-before-function-paren': ['error', 'never'],

        // ES6
        'prefer-const': [
            'error',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: true
            }
        ],
        'prefer-arrow-callback': [
            'error',
            {
                allowNamedFunctions: false,
                allowUnboundThis: true
            }
        ],
        'object-shorthand': [
            'error',
            'always',
            {
                ignoreConstructors: false,
                avoidQuotes: true
            }
        ],
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'template-curly-spacing': 'error',
        'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
        'generator-star-spacing': 'off',

        // Best Practice
        'array-callback-return': 'error',
        'block-scoped-var': 'error',
        'complexity': ['off', 11],
        'eqeqeq': ['error', 'allow-null'],
        'no-alert': 'warn',
        'no-case-declarations': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-with': 'error',
        'no-void': 'error',
        'no-useless-escape': 'off',
        'vars-on-top': 'error',
        'require-await': 'off',
        'no-return-assign': 'off',
        'operator-linebreak': ['error', 'before'],

        // unicorns
        'unicorn/switch-case-braces': 'error',
        'unicorn/no-unnecessary-await': 'error',
        'unicorn/prefer-logical-operator-over-ternary': 'error',
        'unicorn/error-message': 'error',
        'unicorn/escape-case': 'error',
        'unicorn/no-array-instanceof': 'error',
        'unicorn/no-new-buffer': 'error',
        'unicorn/no-unsafe-regex': 'off',
        'unicorn/number-literal-case': 'error',
        'unicorn/prefer-exponentiation-operator': 'error',
        'unicorn/prefer-includes': 'error',
        'unicorn/prefer-starts-ends-with': 'error',
        'unicorn/prefer-text-content': 'error',
        'unicorn/prefer-type-error': 'error',
        'unicorn/throw-new-error': 'error',
        'unicorn/prefer-node-protocol': 'error'
    }
}

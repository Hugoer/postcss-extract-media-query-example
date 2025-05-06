module.exports = {
    extends: ['@netcentric/stylelint-config'],
    plugins: ['stylelint-prettier', 'stylelint-scss'],
    ignoreFiles: ['**/*.css', '**/*.js', '**/node_modules/**'],
    fix: true,
    rules: {
        'at-rule-no-unknown': [true, {
            ignoreAtRules: ['use', 'forward', 'function', 'if', 'each', 'else', 'for', 'include', 'mixin', 'return', 'warn', 'error', 'extend']
        }],
        'plugin/no-unsupported-browser-features': [
            true,
            {
                browsers: [
                    'ChromeAndroid >= 81',
                    'Chrome >= 81',
                    'Edge >= 81',
                    'Firefox >= 75',
                    'iOS >= 13',
                    'Safari >= 13'
                ],
                ignore: [
                    'css-when-else',
                    'css-color-function',
                    'rem',
                    'css-nesting',
                    'css-variables',
                    'css-logical-props',
                    'outline',
                    'css-fixed',
                    'css-unset-value',
                    'css-initial-value',
                    'intrinsic-width',
                    'css3-cursors',
                    'object-fit',
                    'css-sticky',
                    'css-appearance',
                    'css-mixblendmode',
                    'word-break',
                    'user-select-none',
                    'css-resize',
                    'viewport-units',
                    'multicolumn',
                    'calc',
                    'flexbox',
                    'css-filters',
                    'css-media-interaction',
                    'text-decoration',
                    'mdn-text-decoration-shorthand',
                    'css-has',
                ],
                ignorePartialSupport: true
            }
        ],

        // TODO: Enable this rules again ( just remove the lines below )
        'declaration-no-important': null,
        'selector-max-specificity': null,
        'selector-max-compound-selectors': null,
        'max-nesting-depth': null,
        'font-family-no-missing-generic-family-keyword': null,
        'declaration-property-unit-allowed-list': null,
        'scss/dollar-variable-pattern': null,
        'scss/at-mixin-pattern': null,
        'scss/no-global-function-names': null,
        'selector-id-pattern': null,
        'no-descending-specificity': null,
        'no-duplicate-selectors': null,
        '@stylistic/max-line-length': null,
        'media-feature-name-no-unknown': null,
        'property-no-unknown': null,
        'declaration-block-no-shorthand-property-overrides': null,
        'number-max-precision': null,
        'scss/double-slash-comment-whitespace-inside': null,

        // Kebab-case
        'selector-class-pattern': null,
        'custom-property-pattern': null,
        'keyframes-name-pattern': null,
    }
};

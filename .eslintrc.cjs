module.exports = {
  root: true,
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.vue'],
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    'standard',
  ],
  plugins: [
    '@typescript-eslint',
    'vue',
  ],
  globals: {
    // Nuxt 3 specific globals
    defineNuxtPlugin: 'readonly',
    defineNuxtConfig: 'readonly',
    defineNuxtRouteMiddleware: 'readonly',
    navigateTo: 'readonly',
    useRouter: 'readonly',
    useSeoMeta: 'readonly',
    useRoute: 'readonly',
    useState: 'readonly',
    useFetch: 'readonly',
    useNuxtApp: 'readonly',
    useRuntimeConfig: 'readonly',
    useHead: 'readonly',
    definePageMeta: 'readonly',
    onServerPrefetch: 'readonly',
    process: 'readonly',
    useConsoleLog: 'readonly',
  },
  rules: {

    // allow async-await
    'generator-star-spacing': 'off',
    // allow paren-less arrow functions
    'arrow-parens': 'off',
    'one-var': 'off',
    'no-void': 'off',
    'multiline-ternary': 'off',

    'import/first': 'off',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',

    // The core 'import/named' rules
    // does not work with type definitions
    'import/named': 'off',

    'prefer-promise-reject-errors': 'off',

    quotes: ['warn', 'single', { avoidEscape: true }],

    // this rule, if on, would require explicit return type on the `render` function
    '@typescript-eslint/explicit-function-return-type': 'off',

    // in plain CommonJS modules, you can't use `import foo = require('foo')` to pass this rule, so it has to be disabled
    '@typescript-eslint/no-var-requires': 'off',

    // The core 'no-unused-vars' rules (in the eslint:recommended ruleset)
    // does not work with type definitions
    'no-unused-vars': 'off',

    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    // allow debugger during
    'vue/multi-word-component-names': 0,
    '@typescript-eslint/no-unused-vars': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }

};

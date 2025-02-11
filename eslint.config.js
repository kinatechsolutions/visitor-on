import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import prettier from 'eslint-plugin-prettier/recommended';
import vueConfigPrettier from '@vue/eslint-config-prettier';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  // js
  pluginJs.configs.recommended,
  {
    rules: {
      'no-unused-vars': 'warn',
    },
  },
  // vue
  ...pluginVue.configs['flat/recommended'],
  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      parser: pluginVue.parser,
    },
  },
  {
    rules: {
      ...vueConfigPrettier.rules,
      'prettier/prettier': [
        'warn',
        {
          singleQuote: true,
        },
      ],
      'vue/multi-word-component-names': 'off',
      'vue/attribute-hyphenation': 'off',
      'vue/no-v-html': 'off',
      'vue/v-on-event-hyphenation': 'off',
    },
  },
  {
    ignores: ['node_modules', '.nuxt', '.output', 'dist'],
  },
  // prettier
  prettier,
  {
    rules: {
      'prettier/prettier': ['warn', { singleQuote: true }],
    },
  },
];

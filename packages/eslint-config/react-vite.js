import pluginReact from 'eslint-plugin-react'
import pluginReactHooks from 'eslint-plugin-react-hooks'
import pluginVitest from 'eslint-plugin-vitest'
import globals from 'globals'
import { config as baseConfig } from './base.js'

/**
 * ESLint config for React projects using Vite
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const config = [
  ...baseConfig,
  pluginReact.configs.flat.recommended,
  {
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.browser,
        ...globals.serviceworker
      }
    }
  },
  {
    plugins: {
      'react-hooks': pluginReactHooks,
      vitest: pluginVitest
    },
    settings: { react: { version: 'detect' } },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'vitest/no-focused-tests': 'error',
      'vitest/consistent-test-it': ['error', { fn: 'test' }]
    }
  }
]

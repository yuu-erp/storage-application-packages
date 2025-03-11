import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'
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
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
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
      // Các rule có thể thêm
      'vitest/no-focused-tests': 'error', // Không cho phép test `.only`
      'vitest/consistent-test-it': ['error', { fn: 'test' }] // Đồng nhất dùng `test` hoặc `it`
    }
  }
]

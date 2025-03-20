import { config as reactViteConfig } from '@repo/eslint-config/react-vite'
import eslintConfigPrettier from 'eslint-config-prettier'

/** @type {import("eslint").Linter.Config} */
export default [
  ...reactViteConfig,
  eslintConfigPrettier,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off'
    }
  }
]

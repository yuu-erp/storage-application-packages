## 📂 01-architecture.md

# 📐 Project Architecture

## 1. Monorepo Structure

- Managed by: `pnpm + turborepo`
- Structure:
  - `packages/`: shared libraries, config, utils
  - `apps/`: individual applications (web/native)
  - `projects/`: legacy or multi-platform structures

## 2. Key Technologies

- React / Next.js / React Native
- TypeScript
- Zustand / Redux (if applicable)
- ESLint + Prettier + Commitlint

## 3. Build & Deploy

- Managed via Turborepo pipelines
- Cached builds for faster CI

## 4. Diagram (optional)

_Add diagram here if available._

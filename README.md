# ESLint Config (based on [@antfu](https://github.com/antfu/eslint-config)) #

[![npm (scoped with tag)](https://flat.badgen.net/npm/v/@ivanmaxlogiudice/eslint-config)](https://npmjs.com/package/@ivanmaxlogiudice/eslint-config)
[![npm](https://flat.badgen.net/npm/dt/@ivanmaxlogiudice/eslint-config)](https://npmjs.com/package/@ivanmaxlogiudice/eslint-config)

Personal ESLint configuration

- Single quotes, no semi
- Auto fix for formatting (aimed to be used standalone without Prettier)
- Designed to work with TypeScript, Vue out-of-box
- Lint also for json, yaml, markdown
- Sorted imports, dangling commas
- Reasonable defaults, best practices, only one-line of config
- **Style principle**: Minimal for reading, stable for diff

## Getting Started

1. Add the package to your devDependencies
```bash
$ pnpm add -D @ivanmaxlogiudice/eslint-config
```

2. Create a `.eslintrc` file
```bash
{
    "extends": ["@ivanmaxlogiudice/eslint-config"]
}
```

## TypeScript

[![npm (scoped with tag)](https://flat.badgen.net/npm/v/@ivanmaxlogiudice/eslint-config-ts)](https://npmjs.com/package/@ivanmaxlogiudice/eslint-config-ts)
[![npm](https://flat.badgen.net/npm/dt/@ivanmaxlogiudice/eslint-config-ts)](https://npmjs.com/package/@ivanmaxlogiudice/eslint-config-ts)

If you're using TypeScript, follow [Getting Started](https://github.com/ivanlogiudice/eslint-config/tree/main/packages/eslint-config-ts#getting-started).

## Vue 3 with TS

[![npm (scoped with tag)](https://flat.badgen.net/npm/v/@ivanmaxlogiudice/eslint-config-vue)](https://npmjs.com/package/@ivanmaxlogiudice/eslint-config-vue)
[![npm](https://flat.badgen.net/npm/dt/@ivanmaxlogiudice/eslint-config-vue)](https://npmjs.com/package/@ivanmaxlogiudice/eslint-config-vue)

If you're using Vue 3, follow [Getting Started](https://github.com/ivanlogiudice/eslint-config/tree/main/packages/eslint-config-vue#getting-started).

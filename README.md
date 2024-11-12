# Chai Landau Portfolio

This is the repo for my portfolio, chailandau.com.

## Tech

-   <strong>[Next.js](https://nextjs.org/) with App Dir</strong> - A React framework for building serverless and static websites
-   <strong>[TypeScript](https://www.typescriptlang.org/)</strong> - Adds type safeties and reduces potential errors further down the road

## Behind the scenes

Some of the tech used behind the scenes, unnoticed, but useful

-   <strong>[Vercel](https://vercel.com/)</strong> - Cloud platform for deploying web apps (made by the same folks as Next.js). It supports serverless functions and global edge delivery.
-   <strong>[GitHub Actions](https://github.com/features/actions)</strong> - Runs linting and tests on open pull requests
-   <strong>Linting</strong> - Comprehensive [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) rule sets automatically run with each commit through [Husky](https://typicode.github.io/husky/) and [lint-staged](https://github.com/okonet/lint-staged).
-   
## Getting started

- [Node version](#node-version)
- [Package manager](#package-manager)
- [Dependencies](#dependencies)
- [Environment variables](#environment-variables)
- [Next.js](#nextjs)
  - [Development server](#development-server)
  - [Production server](#production-server)
- [Deploy](#deploy)

### Node version

This project uses Node v20.17.0.

If you're using nvm, you can run `nvm use` to switch to the right version.

If you don't have nvm installed yet, you can get it [here](https://github.com/nvm-sh/nvm).

### Package manager

This project uses yarn v4.5.0.

Corepack must be enabled for this version -- run `corepack enable` in your terminal.

- **Note**: [On Vercel](https://vercel.com/docs/deployments/configure-a-build#corepack), you must add an `ENABLE_EXPERIMENTAL_COREPACK` variable with a value of `1` to ensure corepack is enabled.


### Dependencies

Install all necessary dependencies using yarn.

```
yarn
```

### Environment variables

You will need to add the appropriate variables in an `.env` file.

### Next.js

#### Development server

Run the development server

```
yarn dev
```

#### Production server

Generate an optimized production build

```
yarn build
```

Run the production build locally

```
yarn start
```

### Deploy

The repo is connected to Vercel. Anytime the main branch updates, the site will be automatically updated and deployed.


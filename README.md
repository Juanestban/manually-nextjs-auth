# Hello World example

This example shows the most basic manually the auth for redirect if the user hasn't authenticated. We have 1 page: `pages/index.js`, 1 component `components/Layout/Login.js` and 1 context `contexts/AuthProvider/AuthProvider.js`. we send from `pages/_app.js` the `Component` and `pageProps` to AuthProvider for handle the conditional rendering if user auth can see the `pages/index.js` and else will see the Login Component (this a simple "auth-redirect" for nextjs)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example hello-world hello-world-app
# or
yarn create next-app --example hello-world hello-world-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

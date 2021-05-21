# Hello World example

This example shows the most basic manually the auth for redirect if the user hasn't authenticated. We have 1 page: `pages/index.js`, 1 component `components/Layout/Login.js` and 1 context `contexts/AuthProvider/AuthProvider.js`. we send from `pages/_app.js` the `Component` and `pageProps` to AuthProvider for handle the conditional rendering if user auth can see the `pages/index.js` and else will see the Login Component (this a simple "auth-redirect" for nextjs)

account:
- [my twitter](https://twitter.com/juanestbandev)

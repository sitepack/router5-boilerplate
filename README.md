# [Sitepack](https://github.com/sitepack/sitepack) boilerplate with router5
Use [router5](http://router5.github.io/) as the client side router. Minimal config.

## Download
Download from [project releases](https://github.com/sitepack/router5-boilerplate/releases).

## Setup
```
cd router5-boilerplate
npm install
```

## Run development server
Use [node-dev](https://github.com/fgnass/node-dev) to execute the server (more reloading capability, gives less accurate error messages).
```
npm run dev
open http://localhost:8080
```
Use Node.js to execute the server (gives more accurate error messages, less reloading capability).
```
npm run dev:node
open http://localhost:8080
```

Use `npm run dev` is fine, switch to `npm run dev:node` when you encounter weird error messages.

## Build
Build your project into `./dist` directory.
```
npm run build
```

## Run production server
Run a static server on `./dist` (it will serve `./dist/404.html` when request url not found).
```
npm start
open http://localhost:8080
```

## Guide

#### Add script/link tags into &lt;head&gt; or &lt;body&gt;
Edit `./base/html.js`.

#### Change default title
Edit `./base/html.js`.

#### Modify layout
Edit `./base/layout.js`.

#### Add a new page
1. Add routes by editing `./config/route.js`.
2. Create `./pages/{route.name}/index.js`.
3. Each `./pages/{route.name}/index.js` should export `render` function that
  - Returns `html string` when doing pre-render (`null` to skip pre-render).
  - Render the page when running in browser.

#### Get router logs
In `./index.js`, uncomment `router.usePlugin(Router5.loggerPlugin())`.

#### Add [styling loaders](https://webpack.github.io/docs/list-of-loaders.html#styling)/Enable CSS Modules
Edit `./webpack/style-loaders.js`.

#### Add non styling loaders such as babel-lodader, jade-loader
Edit `./webpack/config.*.js`.

#### Where to put `favicon.ico` and web font files?
`./public`.

## What happened during build time?
1. Delete `./dist`.
2. Build bundles, extract styles to `{page}.css`, this also makes route modules able to run in the node context.
3. Render pages to `{page}.html` by calling `{page}.render()`.
4. Build bundles again without extracting styles, optimize for production.
5. Copy `./public` to `./dest`.
6. Clean up.

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
Edit `./components/Layout`.

#### Add a new route
1. Add routes by editing `./config/route.js`.
2. Create route module correspond to `route.module` you just added.

#### Get router logs
In `./index.js`, uncomment `router.usePlugin(Router5.loggerPlugin())`.

#### Add [styling loaders](https://webpack.github.io/docs/list-of-loaders.html#styling)/Enable CSS Modules
Edit `./webpack/style-loaders.js`.

#### Add non styling loaders such as babel-lodader, jade-loader
Edit `./webpack/config.{your choice}.js`.

#### Where to put `favicon.ico` and other resources?
`./public`.

## What happened during build time?
1. Delete `./dist`.
2. Build bundles, extract styles to `{route.name}.css`, this also makes route modules able to run in the node context.
3. Render pages to `{route.name}.html` by calling `prerender(routeModule)`.
4. Build bundles again without extracting styles, optimize for production.
5. Copy `./public/*` into `./dest`.
6. Clean up.

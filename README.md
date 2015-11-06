# Sitepack ES5 boilerplate

## Setup
```
git clone https://github.com/sitepack/es5-boilerplate.git
cd es5-boilerplate
npm install
```

## Run development server
```
npm run dev
open http://localhost:8080
```

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

#### Add some tags into &lt;head&gt;, change default title
Edit `./base/html.js`.

#### Modify layout
Edit `./base/layout.js`.

#### Add a new page
1. Add routes by editing `./config/route.js`.
2. Create `./pages/{route.name}/index.js`.
3. Each `./pages/{route.name}/index.js` should export `render` function that
  - Returns `html string` when doing pre-render (`null` to skip pre-render)
  - Returns `html string` or `DOM element` when running in browser (`null` to skip render).
4. `canActivate` and `canDeactivate` are optional.

#### Get router logs (for debugging)
In `./index.js`, uncomment `router.usePlugin(Router5.loggerPlugin())`.

#### Add css preprocessor loaders to support SASS, LESS
Edit `./webpack/style-loaders.js`.

#### Enable CSS Modules, add css post processor loader.
Edit `./webpack/style-loaders.js`.

#### Add non css related loaders such as babel-lodader, jade-loader
Edit `./webpack/config.base.js`.


## What happen during build time?
1. Delete `./dist`.
2. Build bundles, extract styles to .css file, this also makes code able to run in node context.
3. Render pages to .html files by calling `{page}.render()`.
4. Build bundles again without extracting styles (layz load style will work).
5. Clean up, delete unused files.

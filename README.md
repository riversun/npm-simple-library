# npm-simple-library-template

Library template for both node and browser

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Quick start

```
npm install
npm start
```

## Project features

### 1.**Code as ES6 and build as ES5 (etc.) using webpack4 and babel7**

### 2.Code check with ESLint

Perform eslint based on airbnb style on build.


- Realtime check using webpack-dev-server

```
npm start
```

- Check code style when building 

```
npm run build
```

### 3.**Test with Jest**

**Run unit tests**

```
npm test
```

**Check test coverage**

```
npm run test:coverage
```

# How to run scripts

- install dependency packages

```
npm install
```

- run example on web browser

```
npm start
```

- run example on Node.js

```
npm run start:node
```

- build library as development mode

```
npm run build
```

- build library as production mode

```
npm run release
```

- run tests

```
npm test
```

- run tests with coverage

```
npm test:coverage
```

# How it works

How webpack builds code as a library.

- Please see [this article (english)](https://dev.to/riversun/recipes-on-how-to-create-a-library-that-supports-both-browser-and-node-js-201m).


# Installed modules

- install babel for transpiling ES6 source code into ES5 etc. 

```
npm install --save-dev @babel/core @babel/preset-env babel-loader
```

- install jest for unit testing

```
npm install --save-dev jest babel-jest
```

- install cross-env for environment variables on both linux and windows

```
npm install --save-dev cross-env
```

- install webpack

```
npm install --save-dev terser-webpack-plugin webpack webpack-cli webpack-dev-server
```

- install eslint for code quality

```
npm install --save-dev eslint eslint-loader
```

- install babel-eslint

Since eslint does not support ES6 as it is, for example, error like `error  Parsing error: The keyword 'import' is reserved` may occur.
**babel-eslint** properly do **eslint** even es6 syntax.

```
npm install --save-dev babel-eslint
```

- install coding rules

If you want to apply an external coding guide like airbnb.

(**npx** is a tool for executing local Node packages included in npm.)

```
npx install-peerdeps --dev eslint-config-airbnb-base
```

# Appendix

## Using Webstorm

How to change Webstorm configuration to match ESLint.



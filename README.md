<p align="center">
  <img src="https://raw.githubusercontent.com/SkwalExe/Memz.js/main/assets/logo.png">
</p>

<p align="center">
  <img src="https://img.shields.io/github/license/SkwalExe/Memz.js?style=for-the-badge">
  <img src="https://img.shields.io/github/stars/SkwalExe/Memz.js?style=for-the-badge">
  <img src="https://img.shields.io/github/issues/SkwalExe/Memz.js?color=blueviolet&style=for-the-badge">
  <img src="https://img.shields.io/github/forks/SkwalExe/Memz.js?color=teal&style=for-the-badge">
  <img src="https://img.shields.io/github/issues-pr/SkwalExe/Memz.js?color=tomato&style=for-the-badge">

</p>

<p align="center">👾 A library to simulate a troll computer virus inside a website</p>

# Memz.js

<p align="center">
  <img src="https://raw.githubusercontent.com/SkwalExe/Memz.js/main/assets/banner.png">
</p>

# Setting up ⬇️

### Package Managers

Install the NPM package using your package manager.

```bash
# npm
npm install @skwalexe/memz

# yarn
yarn add @skwalexe/memz
```

Then import the library.

```js
// For CommonJS
const Memz = require('@skwalexe/memz')

// For ES Modules
import Memz from '@skwalexe/memz'
```

### Import with \<script\> tag

If you use this method, the library will be available globally as `Memz`.

```js
<script src="https://cdn.jsdelivr.net/npm/@skwalexe/memz@0.1.0/dist/memz.umd.js"></script>
```

# Using this library 📦

This library exports a `Memz` class which acccepts the following parameters:

- `assetsUrl / required`: Memz needs to load **remote assets** such as css stylesheets, sounds, and images, which you can host on your own servers. This parameter is used to tell Memz where it can find these assets. You must provide a **base url**, to which Memz will just append the requested asset's file name. If you don't want to host the assets yourself, you can use JSDelivr like in the example below.

```js
const mmz = Memz('https://cdn.jsdelivr.net/gh/SkwalExe/Memz.js@0.1.0/src/assets/')
```

Once you instanciated the `Memz` class, it exposes the follwing methods:


- `mmz.all()`: Run all the effects listed below at once.
- `mmz.changeCursor()`: Change the mouse cursor randomly very fast.
- `mmz.invertColors()`: Randomly invert the colors on the entire page.
- `mmz.messageBoxes()`: Randomly show windows-like dialogue boxes, with the original messages.
- `mmz.rotateScreen()`: Change the orientation of the webpage randomly.
- `mmz.floatingIcons()`: Show windows error/warning icons following the cursor when it moves.
- `mmz.computerSounds()`: Randomly play windows sounds (alert, warning, error...).


### `mmz.all()`

This method will run all the effects listed above at once. It doesn't use any parameters and doesn't return anything.

```js
mmz.all()
```

### `mmz.changeCursor()`

This method will change the mouse cursor randomly very fast. It doesn't use any parameters and doesn't return anything.

```js
mmz.changeCursor()
```

![changeCursor](https://raw.githubusercontent.com/SkwalExe/Memz.js/main/assets/changeCursor.gif)

### `mmz.invertColors()`

This method will invert the entire page's colors at random intervals. It doesn't use any parameters and doesn't return anything.

```js
mmz.invertColors()
```

### `mmz.messageBoxes()`

This method will randomly show windows-like dialogue boxes, with the original memz messages. It doesn't use any parameters and doesn't return anything.

```js
mmz.messageBoxes()
```

### `mmz.rotateScreen()`

This method will randomly change the orientation of the webpage. It doesn't use any parameters and doesn't return anything.

```js
mmz.rotateScreen()
```

### `mmz.floatingIcons()`

This method will show windows error/warning icons following the cursor when it moves. It doesn't use any parameters and doesn't return anything.

```js
mmz.floatingIcons()
```

![floatingIcons](https://raw.githubusercontent.com/SkwalExe/Memz.js/main/assets/floatingIcons.png)

### `mmz.computerSounds()`

This method will randomly play windows sounds (alert, warning, error...). It doesn't use any parameters and doesn't return anything.

```js
mmz.computerSounds()
```

# Contributing 🤝

Please, open an issue if you have any suggestion or if you found a bug. I will try to fix it as soon as possible.

## General Info About the Project 📖

This is a simple library that can create Windows message boxes on a web page. It uses the following technologies for the development process and for the build pipeline:

- TypeScript for typechecking.
- Babel.js for creating polyfills (browser retro-compatiblity).
    - Node that we will only create polyfills for the final UMD bundle, and not for the CJS/ESM builds because creating polyfills is in my opinion the responsability of the library users. 
- Rollup for UMD bundle generation.
- ESLint for linting.
- Prettier.js for formatting.
- [WinMB.js](https://github.com/SkwalExe/WinMB.js) for Windowsl-like message boxes

## Setting up the development environment 🖥️

- [Fork this repository to your own GitHub account.](https://github.com/SkwalExe/Memz.js/fork)
- Clone your fork locally.

```bash
git clone https://github.com/YOUR_USERNAME/Memz.js
cd ./Memz.js
```

- Install devDependencies

```bash
npm install --include=dev
```

- Run the npm `serve` script to start a local development server on port `10001`
    - This will continuously rebuild the UMD bundle and reload the page.

```bash
npm run serve
```

- Open the local development server on `https://localhost:10001/` and open the project in your IDE.

## Files and directories 📂

> Unreferenced files are just not important.

__Configuration Files:__ ⚙

- `babel.config.js`: Babel configuration file.
- `eslint.config.mjs`: ESLint configuration file.
- `rollup.config.mjs`: Rollup configuration file.
- `tsconfig.json`: TypeScript configuration file.
- `package.json`: NPM package configuration.

__Source:__ 🔢
- `src/assets/`: Contains library assets (CSS styleshetts, audio files, images...)
- `src/main.ts`: Library entry point (only imports/exports)

__Builds:__ 👷

- `dist/lib-cjs/`: CommonJS build.
- `dist/lib-esm/`: ESM build.
- `dist/memz.umd.js`: UMD bundle.

__Other:__ 📄

- `assets/`: Assets for the GitHub repo only.
- `index.html`: Simple HTML page for testing the library.

## Creating a pull request 👍

If you'd like to contribute, please open an empty pull request and provide an explanation of your proposed changes. Once I approve it, you can begin your work. It's always disheartening to reject a pull request after someone has invested a lot of time and effort into it. 😿

- Create a branch for your contribution

```bash
git checkout -b my-new-feature
```

- When you finished your changes, you must check your code's formatting and linting and fix all the errors.

```bash
npm run lint:fix # check for linting errors
npm run check-types # check for type errors
npm run format # comply with formatting rules
```

- After that, add your changes to `CHANGELOG.md` and update the README if needed.

- Do not increment the NPM package version yourself, the maintainer will do it.

- Then, you can commit your work and push to your fork.

```bash
git add --all 
git commit -m "Added a new feature"
git push -u origin my-new-feature
```

- Finally, you can create your pull request from your fork repo's github page.

## NPM scripts

- `lint`: Perform ESLint checks.
- `format`: Format codebase with prettier.
- `clean`: Remove `./dist/`.
- `build:cjs`: Build CommonJS version from source.
- `build:esm`: Build ESM version from source.
- `build:umd`: Build UMD bundle from ESM version.
- `watch-esm`: Rebuid ESM version on any detected change.
- `watch-umd`: Creates local dev server, rebuild UMD bundle and reload the server automatically on any change detected from ESM version.
- `build`: Build all versions: ESM, CJS, UMD bundle.
- `serve`: Rebuild ESM and UMD bundle on any detected change, while creating a local dev server.


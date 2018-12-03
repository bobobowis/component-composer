# handlebars-component-composer

> Component composer for handlebars

## Dependencies
| Module | Description |
| ------ | ------ |
| [camelcase](https://www.npmjs.com/package/camelcase) | Convert a dash/dot/underscore/space separated string to camelCase or PascalCase. |
| [handlebars](https://handlebarsjs.com) | Handlebars provides the power necessary to let you build semantic templates effectively with no frustration. |

 ## Dev Dependencies
| Module | Description |
| ------ | ------ |
| [@babel/cli](https://babeljs.io/docs/en/babel-cli) | Babel comes with a built-in CLI which can be used to compile files from the command line. |
| [@babel/core](https://babeljs.io/) | Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.  |
| [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env) | @babel/preset-env is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). This both makes your life easier and JavaScript bundles smaller! |
| [jsdoc](http://usejsdoc.org/) |  JSDoc is a markup language used to annotate JavaScript source code files. Using comments containing JSDoc, programmers can add documentation describing the application programming interface of the code they're creating. |
| [tui-jsdoc-template](https://github.com/nhnent/tui.jsdoc-template) | Toast UI JSDoc template |
| [mocha](https://mochajs.org/) | Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. |
| [jsdom](https://github.com/jsdom/jsdom) | A JavaScript implementation of the WHATWG DOM and HTML standards, for use with node.js |
| [jsdom-global](https://github.com/rstacruz/jsdom-global) | jsdom-global will inject document, window and other DOM API into your Node.js environment. Useful for running, in Node.js, tests that are made for browsers.|
| [chai](https://www.chaijs.com/) | Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework. |
| [mochawesome](https://adamgruber.github.io/mochawesome/) | Mochawesome is a custom reporter for the testing framework, mocha. It generates a full fledged HTML/CSS report that helps visualize your test suites. |
| [nyc](https://github.com/istanbuljs/nyc) | Istanbul instruments your ES5 and ES2015+ JavaScript code with line counters, so that you can track how well your unit-tests exercise your codebase. The nyc command-line-client for Istanbul works well with most JavaScript testing frameworks: tap, mocha, AVA, etc. |
| [eslint](https://eslint.org/) | ESLint is an open source project originally created by Nicholas C. Zakas in June 2013. Its goal is to provide a pluggable linting utility for JavaScript. |
| [eslint-config-standard](https://github.com/standard/eslint-config-standard) | An ESLint Shareable Config for JavaScript Standard Style |
| [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import) | This plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names. All the goodness that the ES2015+ static module syntax intends to provide, marked up in your editor. |
| [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node) | Additional ESLint's rules for Node.js |
| [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise) | Enforce best practices for JavaScript promises. |
| [eslint-plugin-standard](https://github.com/standard/eslint-plugin-standard) | ESlint Rules for the Standard Linter |
| [webpack](https://webpack.js.org) |  Webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph which maps every module your project needs and generates one or more bundles.|

## Package.json scripts
### Generate documentation
```sh
$ npm run generate-doc
```
The documentation will be generated in doc folder with the following structure:

* **code**: JSDoc Documentation (*generate-doc-jsdoc*)
* **coverage**: Istanbul Coverage tests (*generate-doc-coverage*)
* **test**: Mochawesome report (*generate-doc-tests*)

### Run tests
```sh
$ npm run test
```

### Run linter and tests
```sh
$ npm run tester
```

### Build bundled and minified version
```sh
$ npm run build
```

### Run linter
```sh
$ npm run linter
```

### Run linter and fix errors
```sh
$ npm run linter-and-fix
```

## Handlebars
Handlebars runtime version with custom helpers added for component composer
### Component helper
Renders a [pre-compiled](https://handlebarsjs.com/precompilation.html) component view with the given context/vm. This will result in a smaller required runtime library and significant savings from not having to compile the template in the browser. This can be especially important when working with mobile devices.

All precompiled templates must be added in the global component-composer variable:
```sh
window['component-composer'].views['component-name']
```

## UIController
### UIController class
This class represents a basic component controller. Our custom controller must extend this class.

It has the current properties:

* **CSS selector for component wrapper**: This is where the component lives and view will be injected.
* **View/Component name**
* **Component factory**: Used for create and validate its view model.
* **View model**

And the following methods:

* **setViewModel**: Sets a new view model using the component factory and renders the view.
* **render**: Renders the precompiled component view using its view model.
* **getComponentNode**: Gets the HTMLNode inside the component DOM for the specified CSS selector.
* **getComponentNodes**: Gets the HTMLNodes inside the component DOM  for the specified CSS selector.

### UIController injector
If the component has an id (global controller), it will be automatically initialized by the UIController injector. Then it will be added to a global variable and can be accesed in client-side using:
```sh
window.controllers['your-component-id']
```
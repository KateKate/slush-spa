# <%= appName %>
<%= appDescription %>

### Demo

...

### Installation

You need Gulp installed globally:
```sh
$ npm i -g gulp
```

Install the dependencies:
```sh
$ npm install
```
You can execute any task like this:
```
$ gulp [task-name]
```
This is the list of available tasks:

* **dev**: build the application and runs it in a dev server (webpack-dev-server)

* **dist**: build a distribution version of the application

  _flags:_

  * **--stage**: builds the stage distribution version

* **stage**: builds the stage distribution version. It is a shortcut to `gulp dist --stage` task

* **tdd**: executes specs in `~/spec/unit/` and watches for changes

* **ci**: executes specs ~/spec/unit/ one time (useful for CI scenarios, jenkins job)

* **lint**: executes eslint task

### Developement

Run in the dev server:
```sh
$ gulp dev
```
Open `http://localhost:9090/webpack-dev-server/` in a browser.

### Deployment

* #### Distribution version

1. Run Gulp's task:
```sh
$ gulp dist
```
2. Move the content of **dist** folder to the place where main site can reach it

...

* #### Stage version

1. Run Gulp's task: `gulp stage`

2. Move the content of **stage** folder to a web server

3. Point to the `index.html` file

### Tech

This project uses the following tech stack:
* [Gulp](http://gulpjs.com/)
* [Webpack](http://webpack.github.io/)
* [Babel](https://babeljs.io/) - compiler for turning ES6+ code into ES5
* [React](https://facebook.github.io/react/docs/tutorial.html)
* [Omniscient](http://omniscientjs.github.io/) - fast top-down rendering immutable data
* [Redux](https://www.npmjs.com/package/redux) - predictable state container for JavaScript apps
* [Mocha](http://mochajs.org/) - feature-rich JavaScript test framework
* [Chais](http://chaijs.com/) - BDD / TDD assertion framework for node.js and the browser that can be paired with any testing framework
* [PhantomJS](http://phantomjs.org/) - is a scripted, headless browser used for automating web page interaction.
* [Sinon](http://sinonjs.org/) - standalone test spies, stubs and mocks for JavaScript. No dependencies, works with any unit testing framework.
* [Axios](https://github.com/mzabriskie/axios) - promise based HTTP client for the browser and node.js

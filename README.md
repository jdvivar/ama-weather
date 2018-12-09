# ama-weather

https://ama-weather.danielvivar.com

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/1aa8b65a9e584fa7a2a939b5004e1521)](https://app.codacy.com/app/jdvivar/ama-weather?utm_source=github.com&utm_medium=referral&utm_content=jdvivar/ama-weather&utm_campaign=Badge_Grade_Dashboard)

## Requirements
- Supply a Flickr API key as explained in [.env.example](.env.example)

## Recommended
- I recommend you to use Vue UI (part of the [Vue CLI](https://cli.vuejs.org)) so that you can run all commands, serve or build the app, execute the tests, etc. by just pointing and clicking. Just do:
```
# Install local packages
npm install
```
```
# Install Vue CLI
npm install --global @vue/cli
```
```
# Start the UI
vue ui
```
and voilà, that's all. By using the UI you don't need to know by heart any of the commands shown below.

## Commands
#### Project setup
```
npm install
```

#### Compiles and hot-reloads for development
```
npm run serve
```

#### Compiles and minifies for production
```
npm run build
```

#### Lints and fixes files
```
npm run lint
```

#### Run your end-to-end tests
```
npm run test:e2e
```

#### Run your unit tests
```
npm run test:unit
```

## Technologies, patterns and tools used for this project
- Vue.js 2 as the frontend framework
- Vue CLI as the tool to manage app development
- Webpack 4 as the bundler
- Babel as the JavaScript compiler
- Everything is written in ES6 (ES7 for async/await)
- All asynchronous processes used async/await
- Styling:
  - Using SCSS styles with SASS pre-processor with autoprefixer
  - Shared variables
  - Including the showcase of 2 different patterns: `line.scss` shows how to use state classes while as the same problem is solved using mixins in `wrapper.scss`
  - Creating a new custom font family
  - CSS animations, as shown in `LoadingDots` component
- Used SFC (Single File Components) in Vue.js
- Used Vuex for global state management
- Used Vue Router for routing with lazy loaded Webpack named chunks, for high performance
- Environment variables via (dot)env files
- Creation of asynchronous API clients for all services
- Using patterns to show loading states and correctly handling errors
- Implementing a design without the use of any CSS framework
- Unit tests with Jest (although the coverage is not 100%)
  - Mocking fetch requests
- E2E tests with Cypress
- Tests can easily be required for a continous delivery approach
- Set up to deploy automatically to a custom domain: https://ama-weather.danielvivar.com
- Continuous deployment with Netlify
- Set up automatic code quality reviews in pull requests and badge showing code quality level by Codacy (see top of this file)
- Linting configured with StandardJS, will try to automatically fix errors
- Using all possible favicon images

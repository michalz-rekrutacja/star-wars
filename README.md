# Star Wars

[![Build Status](https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fmichalz-rekrutacja%2Fstar-wars%2Fbadge%3Fref%3Dmaster&style=flat)](https://actions-badge.atrox.dev/michalz-rekrutacja/star-wars/goto?ref=master)

See a live demo on [**GitHub Pages**](http://michalz-rekrutacja.github.io/star-wars).
A simple game based on Star Wars made with React, TypeScript, Material UI and [swapi.co](https://swapi.co).

### What it does
  - Fetches data from [swapi.co]
  - Compares crew number of fetched resources to draw a winner
  - Counts wins for particular users


### Notes
  - The foundation for the game is TypeScript and React
  - UI uses Material UI and the `@material-ui/styles` based on `JSS` for custom styles; built with mobile devices in mind - the layout will adjust automatically to the screen size
  - Has unit tests written with `@testing-library/react`
  - Deploys and tests the app on pull requests with Github Actions workflows
  - Follows a consistent code and commit style with `eslint` and `commitlint` - rules enforced on commits

### Development and technical interactions
The app was bootstraped using `create-react-app` and exposes various commands:
- `npm run start` - for starting the development server
- `npm run build` - buliding the app
- `npm run test` - running the unit tests
- `npm run lint` - checking the code quality with `eslint`
- `npm run lint:fix` - fix auto-fixable lint issues

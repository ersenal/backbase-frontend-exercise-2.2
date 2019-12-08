# backbase-frontend-exercise-2.2

A single page application which uses the [OpenWeather](https://openweathermap.org/api) api. Built with Typescript (code output constrained to ES6) + React.

## Build Setup

**Requires Node.js 8+**

```bash
# setup environment variables
cp .env.example .env

npm install # or yarn

# run tests
npm test

# dev mode hot reloaded at localhost:8080
npm run dev

# production build
npm run prod
```

## Features

This solution includes the following features:

- Functional requirements defined within the specification:

  - Display the current weather situation (average temperature and wind strength) for a list of 5 European cities

  - Clicking on a list item shows the weather forecast for the next hours

  - Use a chart for extra points. This solution charts the predicted temperature

- Non-functional requirements defined within the specification:

  - This solution is a single page application

  - This solution uses the ES6 standard (see [tsconfig.json](tsconfig.json))

  - No scaffolding tools have been utilised

  - Instructions on how to run the solution have been provided

  - No out-of-the-box plugins have been used

  - A readme file has been created, describing what has been done

  - Inline code comments have been provided to explain low-level decisions

  - A summary has been provided in this file to explain higher-level architectural decisions

- Functional requirements _not_ defined within the specification:

  - Provide the ability to select a temperature unit (Kelvin, Fahrenheit, or Celsius)

- Non-functional requirements _not_ defined within the specification:

  - Minification of assets and CSS extraction in production builds

  - Hot-reload in development

  - Full linting and formatting setup (_tslint_, _prettier_, _husky_)

  - No hardcoded API key, it can be passed in via an environment variable (see [.env.example](.env.example)) defined in a _.env_ file

## UI/UX

One of the first design decisions I had to make was to do with displaying the list of cities. The first idea that came to my mind was a tabular format where each row would contain the current weather information of a given city. This, in my opinion, turned out to be quite uninteresting, in terms of attractiveness. In the end, I chose to represent the current weather status as a thumbnail (or a card) mainly because it looked better with weather icons. The trade-off in this case, in my opinion, is that it makes comparison more difficult as the data is not vertically aligned.

For the forecasting page, I took inspiration from [BBC Weather](https://www.bbc.com/weather/2653822) and implemented similar looking measurement _slices_, but with a stripe pattern for ease of parsing and a chart overlay displaying the average temperature.

Even though it might be an overkill to use a UI framework for an exercise, [Blueprint](https://blueprintjs.com/) (A React-based UI toolkit for the web) is used throughout the solution for brevity and also because of its component composability and Typescript compatibility.

## Architecture

<!-- TODO -->

## Final Thoughts

Overall, I enjoyed the exercise. Even though it is quite straightforward in terms of requirements, there are a lot of interesting approaches one can take. For example, OWM provides a number of other API endpoints for retrieving the current weather status of multiple cities (i.e. in bulk) and forecasting with different granularity (hourly, 16-day, etc.). I took the path of least resistance and used the API endpoints given in the specification. If I had more time, it would have been interesting to utilise the other OWM APIs and see how this would have changed the design or architecture.

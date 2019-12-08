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

This solution includes the following features.

**Functional requirements defined within the specification**:

- Display the current weather situation (average temperature and wind strength) for a list of 5 European cities

- Clicking on a list item shows the weather forecast for the next hours

- Use a chart for extra points. This solution charts the predicted temperature

**Non-functional requirements defined within the specification**:

- This solution is a single page application

- This solution uses the ES6 standard (see [tsconfig.json](tsconfig.json))

- No scaffolding tools have been utilised

- Instructions on how to run the solution have been provided

- No out-of-the-box plug-ins have been used

- A readme file has been created, describing what has been done

- In-line code comments have been provided to explain low-level decisions

- A summary has been provided in this file to explain higher-level architectural decisions

**Functional requirements _not_ defined within the specification**:

- Provide the ability to select a temperature unit (Kelvin, Fahrenheit, or Celsius)

- Error handling

**Non-functional requirements _not_ defined within the specification**:

- Unit testing

- Minification of assets and CSS extraction in production builds

- Hot-reload in development

- Full linting and formatting setup (_tslint_, _prettier_, _husky_)

- No hard-coded API key, it can be passed in via an environment variable (see [.env.example](.env.example)) defined in a _.env_ file

## UI/UX

One of the first design decisions I had to make was to do with displaying the list of cities. The first idea that came to my mind was a tabular format where each row would contain the current weather information of a given city. This, in my opinion, turned out to be quite uninteresting, in terms of attractiveness. In the end, I chose to represent the current weather status as a thumbnail (or a card) mainly because it looked better with weather icons. The trade-off in this case, in my opinion, is that it makes comparison more difficult as the data is not vertically aligned.

For the forecasting page, I took inspiration from [BBC Weather](https://www.bbc.com/weather/2653822) and implemented similar looking measurement _slices_, but with a stripe pattern for ease of parsing and a chart overlay displaying the average temperature.

Even though it might be an overkill to use a UI framework for an exercise, [Blueprint](https://blueprintjs.com/) (A React-based UI toolkit for the web) is used throughout the solution for brevity and also because of its component composability and Typescript compatibility.

## Architecture

The overall architecture of the solution follows the separation of concerns paradigm, which is reflected by the organization of source folders. For example, everything to do with the OWM API can be found within the `src/api` folder.

We make judicious use of composition. For presentation, we define two types: containers and components. Components are concerned with how things look and contain minimal logic to achieve their objective. They are stateless. Containers on the other hand contain internal state which can be modified via internal logic. For example `CurrentWeatherContainer` is concerned with only the state of the current weather status of a given city, and exposes its state to an arbitrary child component.

One downside of relying solely on containers to manage state is that we are forced to pass common properties such as the temperature unit to multiple levels of children components which feels a bit redundant. It would have made sense to use a global store (such as Redux or React's Context) if this was not an exercise. It didn't make sense for me to use Redux in this exercise as it introduces a considerable amount of boilerplate code (e.g. actions, reducers, thunks) which would not be ideal considering the scope of this project.

## Final Thoughts

Overall, I enjoyed the exercise. Even though it is quite straightforward in terms of requirements, there are a lot of interesting approaches one can take. For example, OWM provides a number of other API endpoints for retrieving the current weather status of multiple cities (i.e. in bulk) and forecasting with different granularities (hourly, 16-day, etc.). I took the path of least resistance and used the API endpoints given in the specification. If I had more time, it would have been interesting to utilise the other OWM APIs and see how this would have changed the design or architecture.

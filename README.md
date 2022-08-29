# Sample application for variationIDs within ConfigCat for A/B testing

A sample application showcasing how to use variationIDs within ConfigCat for A/B testing.

## About

This is a demo React app used to perform A/B test experimentation with two color variants (blue and red) of a “Buy Now” button implementation to see which one leads to better conversion with users (i.e. better sales). Both buttons are set to conditionally rendered based on the value of the associated feature flag on ConfigCat. The result is fed to the Amplitude Analytics service with ConfigCat's VariationIDs included to visualize results of the performance of the buttons.

## How it works

Clicking on the "Buy Now" button logs an event to Amplitude with the associated Vartion ID for the value of the feature flag's target rule. The events are then recorded in an analysis chart that can be filtered based on Variation ID.

## Build & Run

Instructions on how to build and run the application locally. A student or junior developer should be able to run the application.

### Prerequisites

- Node v16
- React 18

### Running the app

1. Clone this repository

2. Open a terminal in the root of the cloned repo and install the required npm packages:

```sh
npm install
```

3. Start the app by running:

```sh
npm run dev
```

## Learn more

Useful links to technical resources.

- React.js [Documentation](https://reactjs.org/docs/getting-started.html)

[**ConfigCat**](https://configcat.com) also supports many other frameworks and languages. Check out the full list of supported SDKs [here](https://configcat.com/docs/sdk-reference/overview/)

You can also explore other code samples for various languages, frameworks, and topics here in the [ConfigCat labs](https://github.com/configcat-labs) on GitHub.

Keep up with ConfigCat on [Twitter](https://twitter.com/configcat), [Facebook](https://www.facebook.com/configcat), [LinkedIn](https://www.linkedin.com/company/configcat/), and [GitHub](https://github.com/configcat).

## Author

[David Herbert](https://github.com/DaveyHert)

## Contributions

Contributions are welcome!

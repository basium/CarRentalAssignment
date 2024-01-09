# Project Submission

Welcome to my assignment submission.

## Requirements

- **Node.js**: Version 18 or higher (developed with 18.18.0).
- **Yarn**: Ensure Yarn is installed globally.

## Development Setup

To run the project in development mode:
```
yarn
yarn dev
```

## Building the Project

To build the project for production:
```
yarn 
yarn build
```

## About the Project

- **Proxy Server**: Implemented to overcome CORS errors and later used for simulating custom requests.
  - Configuration is done using `runtimeConfig` in `nuxt.config.js`.
  - Runtime configuration implemented in `server/api`.
  - Custom request simulation in `promotions.ts` for the adverts on the homepage.

- **Components**:
  - `ConnectedProductList`: Connects to a Pinia store and manages its own state. Used for paged sections and search functionality.
  - `ProductList`: A client-side component that expects the data source to be provided by its parent component.

- **Favorites Implementation**: Utilizes local storage. Ideally, this would be server-side, but local storage is used for demonstration purposes. The code is designed for easy future substitution.

- **Tailwind CSS**: Custom classes added. See `tailwind.config.js`.

## Areas for Improvement

- **Testing**: Skipped due to time constraints.
- **Responsiveness**: Not fully implemented due to time constraints.
- **Asset Optimization**: SVGs and images are not fully optimized.
- **Docker Integration**: Not implemented.
- **Review Component**: Currently static due to time constraints. Future versions will be interactive.
- **Search Functionality**: The search query sanitization needs improvement.

## Final Note

I thoroughly enjoyed building this project, dedicating approximately 12 hours to it. Given a 5-day timeframe, my schedule limited the time available. As a result, certain aspects like testing and responsiveness were not implemented. This was my first experience with Nuxt, having previously worked primarily with Vue. I prefer using the Options API for larger enterprise projects due to its organizational benefits, but I am also familiar with the Composition API.

Thank you for considering my submission. I look forward to your feedback.


# React Redux Saga TypeScript Application

This is a modern React application built with Redux, Redux-Saga, TypeScript, and CSS Modules.

## Features

- React 18 with TypeScript
- State management with Redux Toolkit
- Asynchronous operations with Redux Saga
- Modular CSS with CSS Modules
- Type-safe Redux hooks

## Project Structure

```
src/
├── components/       # Reusable UI components
├── hooks/            # Custom React hooks
├── store/            # Redux store configuration
│   ├── counter/      # Counter feature module
│   │   ├── actions.ts
│   │   ├── sagas.ts
│   │   └── slice.ts
│   └── index.ts      # Root store configuration
├── App.tsx           # Main App component
└── index.tsx         # Entry point
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Start the development server:

```bash
npm start
# or
yarn start
```

3. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from create-react-app

## Learn More

- [React Documentation](https://reactjs.org/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [Redux Saga Documentation](https://redux-saga.js.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

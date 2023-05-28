# React App README

This is a React application that utilizes Vite for fast development and Redux Toolkit for state management. It includes components for displaying a list of users and their details, styled using Bootstrap and React Bootstrap.

## Project Structure

The project structure is organized as follows:

```
src
├── App.jsx
├── components
│   ├── index.js
│   ├── Loader.jsx
│   ├── MyToast.jsx
│   ├── UserDetails.jsx
│   └── UsersList.jsx
├── features
│   ├── dataSlice.js
│   └── selectedUserSlice.js
├── index.css
├── main.jsx
└── store
    └── store.js
```

- **App.jsx**: The main component that renders the application.
- **components**: Includes various components used in the application, such as `Loader`, `MyToast`, `UserDetails`, and `UsersList`. The `index.js` file exports all the components.
- **features**: Contains Redux Toolkit slices for managing data and selected user state. The `dataSlice.js` file manages the user data, and the `selectedUserSlice.js` file handles the selected user.
- **index.css**: CSS file for styling the application.
- **main.jsx**: The entry point of the application.
- **store**: Contains the Redux store configuration in the `store.js` file.

## Setup and Usage

1. Clone the repository or download the source code.
2. Install the required dependencies using a package manager of your choice. Run `npm install` or `yarn install`.
3. Start the development server using `npm run dev` or `yarn dev`.
4. Open your browser and visit `http://localhost:5173` to view the application.

## Dependencies

The following dependencies are used in this project:

- React: A JavaScript library for building user interfaces.
- Vite: A fast development build tool for modern web applications.
- Redux Toolkit: A package that simplifies Redux state management.
- Bootstrap: A popular CSS framework for responsive web design.
- React Bootstrap: Bootstrap components implemented as React components.

You can find the full list of dependencies and their versions in the `package.json` file.

## Contributing

If you want to contribute to this project, you can follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Make your changes and commit them.
4. Push the changes to your forked repository.
5. Open a pull request, describing your changes and their purpose.

Please ensure that your code follows the existing coding style and conventions.

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute the code as per the terms of the license.


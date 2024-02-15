## Movie Mania: Mobile-First React Application

For Live Demo: https://movie-mania-mobile-first.vercel.app/

Welcome to Movie Mania, a mobile-first React application designed to provide users with a seamless movie browsing experience. Follow the instructions below to set up and run the project on your local machine.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Project Structure](#project-structure)
3. [Architecture Approach](#architecture-approach)
4. [Technologies Used](#technologies-used)
5. [Testing](#testing)
6. [Deployment and Hosting](#deployment-and-hosting)
7. [Continuous Integration](#continuous-integration)

## Getting Started

1. **Clone the Repository:** 
    ```bash
    git clone https://github.com/dharmik-valani/movie-mania-mobile-first
    ```

2. **Navigate to Project Directory:**
    ```bash
    cd movie-mania-mobile-first
    ```

3. **Install Dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

4. **Create Environment Variables:**
    - Create a new `.env` file in the root directory.
    - Copy the environment variables from `.env.example` and replace the placeholders with actual values for `VITE_MOVIE_APIKEY` and `VITE_MOVIE_AUTHORIZATION_TOKEN` provided by the movie dev API.

5. **Start Development Server:**
    ```bash
    npm run dev
    # or
    yarn run dev
    ```

6. **Running Tests:**
    To run the test cases, use the following command:
    ```bash
    npm run test
    ```

## Project Structure

The project follows a well-organized structure for ease of development and maintainability:

```
/src
├── /assets
│   └── /component-name
│       └── images
├── /components
│   ├── /Input
│   │   ├── Input.component.js
│   │   ├── Input.module.css 
│   │   └── __tests__
│   │       └── input.test.js
├── /views or pages 
├── /services 
├── /utils 
├── /hooks 
├── /store 
└── App.jsx
└── App.css
├── index.js 
├── index.css
├── .env 
├── .env.example
└── / Licence
```

## Architecture Approach

### Design Philosophy
The architecture of this project aims to ensure scalability, maintainability, and standardization. Here's an overview:

1. **Component-based Structure:** Components are organized in a modular manner for reusability and easy management.
2. **Standard Coding Practices:** ESLint rules are enforced to maintain consistent coding standards across the development team.
3. **Testing:** Unit tests are incorporated using Jest and @testing-library/react to ensure robustness and reliability of components.
4. **State Management:** Redux Toolkit is utilized for state management, providing a centralized and predictable way to manage application state.

## Technologies Used

### Framework and Libraries

- **Framework:** React with Vite
    - **Vite:** Utilized for fast and efficient development with features like lightning-fast hot module replacement (HMR) and optimized build times.
     - next js
     - react js


- **UI Library:** Tailwind CSS
    - **Tailwind CSS:** Chosen for its utility-first approach, allowing for rapid styling and customization while maintaining a consistent design system.

- **CSS:** CSS Modules (https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)

- **Unit Testing:** Jest with @testing-library/react
- **Bundling:** Vite
- **Additional Libraries:**
    - Redux Toolkit
    - Date Fns
    - React Query


### Project Structure

The project adheres to a modular and organized structure for improved development efficiency and maintainability:

- **Component-based Architecture:** Components are organized into reusable and self-contained modules, promoting code reusability and scalability.
- **Separation of Concerns:** Views (or pages), components, services, utilities, hooks, and state management are each segregated into dedicated directories, ensuring clear separation of concerns.
- **CSS Modules:** CSS modules are utilized for component-specific styling, preventing style leakage and conflicts while enabling scoped styling.


### Advanced React Structure

In addition to the foundational project structure, the following advanced React structure points are incorporated:

- **Container-Component Pattern:** Embraces the container-component pattern for managing state and data logic separately from presentational components, promoting cleaner and more maintainable code.
- **Higher-Order Components (HOCs):** Leveraged for cross-cutting concerns such as authentication, logging, and performance monitoring, enhancing code reusability and separation of concerns.
- **Context API and useContext Hook:** Utilized for managing global state and sharing data between components without prop drilling, offering a more elegant and efficient solution for state management.
- **Custom Hooks:** Abstracts complex logic into reusable custom hooks, promoting code reuse and encapsulation of business logic within functional components.
- **Redux Toolkit Integration:** Integrates Redux Toolkit for efficient and predictable state management, providing a centralized store for managing application state and enabling powerful debugging capabilities.

## Testing

Testing is an integral part of the development process. Unit tests are written using Jest and @testing-library/react to ensure components behave as expected and maintain functionality during code changes.

## Deployment and Hosting

The project can be deployed and hosted using platforms like Vercel for seamless deployment and continuous integration. GitHub actions can be configured for automatic deployment triggered by code pushes.

## Continuous Integration

Continuous integration is implemented using GitHub Actions. CI workflows can be set up to automate tasks such as testing, linting, and deployment, ensuring code quality and reliability throughout the development process.

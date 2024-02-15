## How to run the project


1. Clone the repository: 
    ```http
    git clone https://github.com/dharmik-valani/movie-mania-mobile-first
    ```
2. Redirect on project directory
3. Open terminal and run command  "npm install or yarn install"
4. create a new .env file
5. copy environment variable from .env.example file and replace the APIKey and Authorization value given by
 ```
    VITE_MOVIE_URL=https://api.themoviedb.org/3
    VITE_MOVIE_APIKEY=
    VITE_MOVIE_AUTHORIZATION_TOKEN = 
  ```
6. Run the command "npm run dev" or "yarn run dev" to start the development preview
7. To run the test cases. Run the command. npm run test. ( It will run all the test cases and in terminal give you a result)


```http

└── /src 
  ├── /assets 
      ├── /compoent-name
          └──images 
  ├── /components
    | ├── /Input 
         | | ├── Input.compoment.js
         | | ├── Input.module.css 
         | | ├── __tests__
            | | ├── input.test.js
  ├── /views or pages 
  ├── /services 
  ├── /utils 
  ├── /hooks 
  ├── /store 
└── App.jsx
└── App.css
  ├── index.js 
  ├── index.css
└── /.env 
└── /.env.example
└── / Licence
```

## How I plan for this project? How I am thinking the design and architecture approach of this projects?

As Given task is only for a quick and short. but as per the architecture level i thought like. what if the 
given of movie App will be used by millions of people. like netflix or other popular platform? and what if multiple devleopment team members will be working on given structure?

## Architecture I planned:

1.  as per the given architecture I planned a structure architecture for it. so all things are separatly handled.
2. For standardize development coding standard practice. I am following the ESLint Rules. so as a team all developer team member can follow same rules and architecture
3. For Testing of any new component's render behaviour, props structure, adding a testcase and their dummy post as well. 
(Initially we can follow typescript for it if we want to strongly bind the rules and structure and have enough development time)
4. Now Let me jump on development

    # Framework 
        1. vite with react  <--- Used This One
        2. next js
        3. react js

    # UI Library
        1. Tailwind UI <--- Used This One
        2. Material UI,
        3. AntD 
        4. Chakra UI
    # CSS
        1. module css <--- Used This One ( https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/ )
        2. styled css   https://styled-components.com/docs 
    
    # Unit Testing 
        1. @testing-library/react and jest

    # Bundling concepts
        1. vite config <--- Used This One ( inbulit feature)
        2. webpack
    
    # React Packages that I mostly use,
        1. Redux Toolkit: https://www.npmjs.com/package/@reduxjs/toolkit 
        2. Date format lirabry: Date Fns or Moment (https://www.npmjs.com/package/date-fns)
        3. Multiple Env Supported structure
            -> .env, .env.example, .env.development, .env.production as well
        4. Es-lint

    # Additinonal Library
        1. React Query: https://tanstack.com/query/latest (package: https://www.npmjs.com/package/@tanstack/react-query)
            -> fetching, caching, synchronizing and updating server state i
    # Deployment and Hosting  (vercel for development preview)
        
    # CI-CD continues integration (Github pipeline)
            -> Vercel trigger, so whenever code push it will goes and live automatically in domain.
            -> Or we can setup a github workflow when we move it in production










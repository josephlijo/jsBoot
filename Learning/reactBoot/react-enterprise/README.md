# Building enterprise applications

## Using [Electrode](http://www.electrode.io/)
- Electrode is a platform for building React/Node.js enterprise applications 
- It is useful since it has got best practices, standardized structure and modern technologies baked in.
- Electrode also focus on performance concerns and cloud deployment features. 
- It has [web](http://www.electrode.io/docs/get_started.html) and native versions. Native version can be used to work with React Native to build rich Mobile applications. 
- It comes with features like ES6, JSX, Mocha, Karma etc. and on top it we can also add modules that we wish to have in our application. 

**Create an app using Electrode (Using `yo`, `x-clap CLI` and `generator-electrode`)** [Obsolete]
- We need to install the following packages: 
    - [yeoman](http://yeoman.io/) which is a scaffolding tool  to generate pre-configured pre-packaged libraries.
    - [xclap-cli](https://github.com/jchip/xclap) which is a task executor that can read npm scripts or JavaScript file and execute tasks. 
    - [generator-electrode](https://www.npmjs.com/package/generator-electrode)
- Create a folder for the app - `ElectrodeApp`
- Install the `yo, xclap-cli and generator-electrode` packages globally: `npm install -g yo xclap-cli generator-electrode`
- Inside the application, do `yo electrode` to create the electrode application.  
During the installation process, it will ask you for the server framework to use. We can select from **HapiJS**, **ExpressJS**, and **KoaJS**
- We are also giving the option to where **We want to create a Progressive Web app**
- Once done, it would generate a organized folder structure for our React, Redux app. 
- Run `clap dev` to run the application. We can see the electrode opens up different ports for application and reporting. 

**Create an app using Electrode Ignite**
- Electrode Ignite bootstraps development with Electrode
- Install electrode ignite `npm i -g electrode-ignite`
- Explore the `ignite` commands: 
    Commands:
        check-nodejs        Check your NodeJS and npm environment
        generate-app        Generate an Electrode application
        generate-component  Generate an Electrode component repo
        add-component       Add a React component to your electrode component repo
        docs                Electrode Open Source official documenation
        check-update        Check for electrode-ignite update
- Use `ignite generate-app` to create a Electrode React application
- It will create the folder structure for our React app
- Run `clap dev` to start the server
# Building enterprise applications

## Using [Electrode](http://www.electrode.io/)
- Electrode is a platform for building React/Node.js enterprise applications 
- It is useful since it has got best practices, standardized structure and modern technologies baked in.
- Electrode also focus on performance concerns and cloud deployment features. 
- It has [web](http://www.electrode.io/docs/get_started.html) and native versions. Native version can be used to work with React Native to build rich Mobile applications. 
- It comes with features like ES6, JSX, Mocha, Karma etc. and on top it we can also add modules that we wish to have in our application. 

**Create an app using Electrode**
- We need to install the following packages: 
    - [yeoman](http://yeoman.io/) which is a scaffolding tool.  
    - [xclap-cli](https://github.com/jchip/xclap) which is a task executor that can read npm scripts or JavaScript file and execute tasks. 
    - [generator-electrode](https://www.npmjs.com/package/generator-electrode)
- Create a folder for the app - `ElectrodeApp`
- Do `npm init` to create the `package.json`
- Install the `yo, xclap-cli and generator-electrode` packages globally: `npm install -g yo xclap-cli generator-electrode`
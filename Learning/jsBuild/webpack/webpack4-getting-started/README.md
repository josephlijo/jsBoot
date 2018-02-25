# Webpack 4
- Webpack is a **build tool** and **module bundler**

# Installation
- Create a project directory, and do `npm init` to create the `package.json`.  
Reference project: *./webpack4-getting-started/webpack-basic*
- Install webpack to dev dependencies (as we don't need it for production) using `npm install webpack --save-dev`
- Install webpack CLI - `npm install webpack-cli --save-dev`
- Do `npm install` to install all the modules

**Folder structure and running webpack using webpack.config.js**
- Lets organize our folder structure by creating a `src` source folder 
- Inside the `src` folder create the *entry point JavaScript file* - `index.js`
- Create *entry point HTML file* - `index.html` at the root directory and include the code cotents like below and add a single script dependency file `bundle.js` (which is not yet created - but this is going to be the bundle the webpack outputs our modules to). 
```
<!DOCTYPE html>
<html>
<head>
	<title>Getting started with webpack</title>
</head>
<body>
	<script src="./dist/bundle.js"></script>
</body>
</html>
```
- Create *Webpack configuration file* - `webpack.config.js` at the root with the following details: 
```
module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js'
	}
};
```
- Run webpack using `.\node_modules\.bin\webpack`  
By default, this will create our `bundle.js` file in `dist` folder. 

**Use NPM build scripts**
- Instead of using `.\node_modules\.bin\webpack`, we could set this up in package.json `scripts` section  
Let's set `script.build` to `webpack`
- Do `npm run-script build` OR `npm run build` to see the bundle file generated. 

**Use a `watch` command to automatically re-build**
- Till now, we have to run the build script after we make changes. To tell webpack to watch for changes we can use `watch` command, which will open up a listener
- In package.json, create a `scripts.watch` command `webpack --w`
- Run `npm run watch` - we can see that the cursor sits in place and changes made to `index.js` is *bundled out* automatically. 

## Webpack Loaders
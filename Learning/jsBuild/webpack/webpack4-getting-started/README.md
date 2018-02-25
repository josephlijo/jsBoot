# Webpack 4
- Webpack is a **build tool** and **module bundler**
- Webpack takes our assets and bundle them out based on the configuration we provide

## Installation
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
- Webpack loaders work at the build stage or processing stage of the bundle to perform tasks like: 
	- Transformation of files from one to another - SCSS to CSS for example, ES6,7, to ES5  (using Babel loader)
	- Load files and images
	- Deal with dialects

## Webpack Plugins
- Webpack plugins mostly work at *bundle* level and usually work at the end of the bundle generation process.  
- Plugins can also modify how bundles themselves are created. 
- Plugins can integrate into webpack by registering hooks within webpack build system and access (or modify) the compiler behavior. 

## Webpack Loaders :: In action
- We include a new property `module.rules` in our `webpack.config.js` file: 
```
module: {
	rules: [...]
}
```
- **Rules** is an array which takes in object which contains **test** which is a regular expression which tell webpack to check for in our assets. We can use **exclude** property to skip specific location / files. Specify the loader to use using the **use** property which takes in an object which contains details about the loader. 
- In **use** object we specify the **loader** along with **options** specific to the loader

**Working with babel-loader**

- Sample to include babel-loader to check for `.js` files would be: 
```
module: {
		rules: [
			{
				test: /.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env'] 
					}
				}
			}
		]
	}
```
- Include the `babel` loader modules using `npm install babel-loader bable-core babel-preset-env --save-dev` 
- We need to create `.babelrc` file at the root.  
It is the configuration file for babel where *we specify which preset to use* 
For example: 
```
{
	'presets': ['env']
}
```
- Do `npm run build` to run the build script and check the generated `bundle.js` file to see how our ES6 features are getting transformed  

Now we have enabled babel-loader to check all `.js` files except those in node_modules folder and the babel-loader will transpile our JavaScript to be compatible to specific preset we specified. 

**Using Babel Presets**
- Let's first have a look at tc39 - the ECMAScript committee which [proposes](https://github.com/tc39/proposals) what should be included in new version. 
- Each proposals go through different stages like 0, 1, 2 etc. 
- If we want to include a feature in stage we can install it using `npm install babel-loader-stage-0 --save-dev` which then means that we can now instruct babel to use features in stage 0 to transpile to stage 3 (accepted proposal)
- Then we need to add it to the `babel-loader options` - `presets: ['env', 'stage-0']` and also in `.babelrc` file

**Using React with serve**
- We can use the babel preset for react when working with React t convert JSX to JavaScript
- Do `npm install babel-preset-react --save-dev` 
- We need to install React and React DOM - `npm install react react-dom --save`
- In order to run a server to host our application, we can install `server` globally - `npm install serve -g`
- Add React code in index.js to see React in action. For example, 
```
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(React.createElement('div', null, 'Hello from React'), document.getElementById('root'));
```
- Make sure you have a section in *index.html* to render the react component: `<div id='root'></div>`
- Now to run the *server* to host our application, change the build script in package.json to be `webpack && serve`
- Do `npm run build` and `serve` will serve our application. 

**Using JSX and Babel-preset for React**
- Now, let's change our content in `index.js` to be in JSX format
```
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<div>Hello from React!</div>, document.getElementById('root'));
```
- JSX will not work unless we use the `babel-preset-react`. To do that, we need to go to `webpack.config.js` and include `react` preset: `presets: ['env', 'stage-0','react']`. Do the same in .babelrc file. 
- Do `npm run build` to see this in action

**Working with Styles, CSS files and SCSS**
- Check [style-loader](https://github.com/webpack-contrib/style-loader) and [css-loader](https://github.com/webpack-contrib/css-loader)
- To use SCSS, check [sass-loader](https://github.com/webpack-contrib/sass-loader)

**Working with images**
- Check [url-loader](https://webpack.js.org/loaders/url-loader/) and [file-loader](https://webpack.js.org/loaders/file-loader/)

## Webpack-dev-server
- Webpack allows us to use a development server that will automatically reload your project when things change. 
- It uses **Node.js Express Server** which uses the **webpack-dev-middleware** to serve a webpack bundle. 
- To listen for changes it uses **Socket.io**
- Install it using `npm install webpack-dev-server --save-dev`
- We need to add `devServer` property object to the exported object in `webpack.config.js`
```
devServer: {
	contentBase: path.join(__dirname, 'dist'),
	port: 8080
},
```
- Since webpack-dev-server runs from `dist` folder, lets copy the `index.html` to `dist` and adjust the `bundle.js` location in script tag
- Lets add a new script section named `dev` in `package.json` file: `"dev": "webpack-dev-server"`
- Run the app using `npm run dev` and navigate to localhost and port `http://localhost:8080` to see if webpack dev server serves the application. 

## Webpack plugins :: In action

**Code-splitting**
- Webpack helps us split our code - For example, if we have *contact* and *about* modules - we can tell the webpack to created separate bundle for each and only load the bundle which is requested. 
- Additionaly, we can use webpack to create bundles for shared code and for vendor code. 
- Let's create a **about** and **contact** sections for our app by creating *about.html* and *contact.html* and backing JavaScript files *about.js* and *contact.js*  
Reference code: *webpack4-getting-started\webpack-code-splitting*

**Using the commons chunk bundle**
- A `webpack loader` gives instruction during the build process on 
- `webpack plugins` are webpack classes which works on the bundle. 
- For example, `commons chunk plugin` will look for reused code and it will create a separate bundle that has common code. It will load the common code into the page first and then load in specific page code after that. 
- Can be used to separate `vendor` specific details and app specific details

**Using HTML webpack plugin**
- This [plugin](https://webpack.js.org/plugins/html-webpack-plugin/) is going to generate an HTML file that links to the bundle. 
- Install it using `npm install html-webpack-plugin --save-dev`

**Uglify JS webpack plugin**
- [UglifyjsWebpackPlugin](https://webpack.js.org/plugins/uglifyjs-webpack-plugin/) wil minify all our code and it's going to generate a bundle that would be in one line.

## References
- [Webpack](https://webpack.js.org/)
- [Webpack loaders](https://webpack.js.org/loaders/)
- [Webpack plugins](https://webpack.js.org/plugins/) 
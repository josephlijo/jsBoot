# Webpack
- Webpack is a **build tool** and **module bundler**

# Why do we need a build system like webpack for JavaScript? 
JavaScript doesn't need to be compiled, it is interpreted. So, functional programming system like JavaScript doesn't need to be build first right? There are exceptions to our ever changing JavaScript world.  

Now a days, web applications began to grow bigger and it started to struggle with problems related to *performance and security*. 
For example, 

- Multiple Web requests - JavaScript files, images, css files, external libraries, even JavaScript files of the same app (file order dependencies)  
    - Solution? **Bundling**, **CSS Sprites**
- Code Size  
    - Solution? **Minification**, **Uglifying**
- File order dependencies. For example, main.js and then load utils.js and then model.js  
    - Solution? **Module system like Angular which takes care of the dependencies itself intelligently**
- Transpilation. For example, ES6 features to ES5 (so that it works in all browsers), *.ts to *.js (TypeScript to JavaScript)  
    - Solution? **JavaScript pre-processor like Babel**
- Linting - Static code analysis to make sure the code aligns with the predefined standards  
    - Solution? **tslint**, **all linters**  
  
**Webpack helps us solving all these and makes it a perfect build tool**
- Bundling
- Minification and uglifying
- Transpilation 
- Linting 
- Working with module system by taking care of dependencies

**How webpack does this and what are prerequisite?**
- Webpack uses special components called **loaders** for this. 
- Webpack works with **npm**, not **bower** - which means that we pack and load all our client-side assets using **npm**
- We need to use a **Module System**

## What are Module System?

# Now, What is **Webpack** again?
- Webpack is a **build tool** and **module bundler**
- Webpack can be thought of as **specialized task runner** (for example, Grunt, and Gulp).
- Webpack is **optimized to do one special task good which is processing input files into output files**
- Webpack **helps us follow a modular approach to development** 
- In a *Module system* we write a module and *require in* all the dependent modules and use them in that file. 
- Webpack helps modular development approach by taking module dependencies and generating a dependency graph. 
- Webpack takes modules and generates static assets representing those modules. 
- The bundler can be used from the **command line (CLI)**OR **can be configured using a config file named webpack.config.js**
 

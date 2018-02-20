# React

## Basics and prerequisite's 
- The very basic rendering structure in React is an `element` which basically is an expression `<div>Hello, World!</div>`.
- This expression is called a JSX expression which gets translated to JavaScript script. For this expression to be translated, we need a JavaScript preprocessor `babel`.

Babel translates `const element = <div>Hello, React!</div>;` to: 
> var element = React.createElement(
  "div", // The element
  null, // The properties 
  "Hello, React!" // Children (can be another element)
);

- Check [babel's REPL](https://babeljs.io/repl/) to check how it gets transformed.
- Link this code to [elements](//codepen.io/LJdev/pen/KQoyvY)
- In addition to the this we need to include [React](//unpkg.com/react/umd/react.development.js) and [React DOM](//unpkg.com/react-dom/umd/react-dom.development.js) JavaScript code files
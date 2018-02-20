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

## Do we need JSX? 
- No, instead of using JSX, we can use `React.createElement...` to create elements
- But, JSX makes it more readable
- In Angular, we have seen a way of separation of concerns by putting HTML in *some.component.html* and backing code in *some.component.ts*, and in the backing code file we specify which template to render.
In React, we are separating the concerns, but in a more intuitive way like `const element = <div className="test" anotherProperty="">`; React uses the same concept of Angular (would be right to say Angular borrowed this concept) named `components` but it React components contains both `html`, and `JavaScript`.
- JSX is an expression itself and it can contain expression. See [example](https://codepen.io/LJdev/pen/aqYqyM)

**Attributes in JSX**
- Atributes in JSX takes the camelCase naming and the HTML attributes have a different form in React so that the JavaScript aspect of React is not colliding with HTML attributes. For example, `class` becomes `className` in React. 

**Using Children in JSX**
- Make sure that if we have child elements, they are wrapped inside a parent element. No child element stands alone. The elements form a tree. For example, see [JSX Expressions](https://codepen.io/LJdev/pen/XZEZyQ)
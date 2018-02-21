# React

## Basics and prerequisite's 
- The very basic rendering structure in React is an `element` which basically is an expression `<div>Hello, World!</div>`.
- This expression is called a JSX expression which gets translated to JavaScript script. For this expression to be translated, we need a JavaScript preprocessor `babel`.

Babel translates `const element = <div>Hello, React!</div>;` to: 
```
var element = React.createElement(  
  "div", // The element  
  null, // The properties  
  "Hello, React!" // Children (can be another element)  
);
```

- Check [babel's REPL](https://babeljs.io/repl/) to check how it gets transformed.
- Example code to use basic structure - [elements](//codepen.io/LJdev/pen/KQoyvY)
- In addition to this we need to include [React](//unpkg.com/react/umd/react.development.js) and [React DOM](//unpkg.com/react-dom/umd/react-dom.development.js) JavaScript code files

## Do we need JSX? 
- No, instead of using JSX, we can use `React.createElement...` to create elements
- But, JSX makes it more readable
- In Angular, we have seen a way of separation of concerns by putting HTML in `my.component.html` and backing code in `my.component.ts` and in the backing code file we specify which template to render (using `decorator`). Then we make use of *in built* data binding *to bind component class data to view*. In Angular, this *backing code class* encapsulates data.  
In React, we are separating the concerns, in a similar way, `const element = <div className="test" anotherProperty="">`; React uses the same concept of Angular named `components` but React components contains both `html`, and `JavaScript` together. 
- JSX is an expression itself and it can contain expression. See [example](https://codepen.io/LJdev/pen/aqYqyM)

**Attributes in JSX**
- Attributes in JSX takes the camelCase naming and the HTML attributes have a different form in React so that the JavaScript aspect of React is not colliding with HTML attributes. For example, `class` becomes `className` in React. 

**Using Children in JSX**
- Make sure that if we have child elements, they are wrapped inside a parent element. No child element stands alone. The elements form a tree. For example, see [JSX Expressions](https://codepen.io/LJdev/pen/XZEZyQ)

## Components everywhere
TODO:// Angular vs. React *Component architecture* 

## Rendering JSX (React elements). 
- We make use of `ReactDOM` object's `render` method to render the JSX (or React Element object). 
- The `render` accepts the elements to render and *where to render* - this *where* will be an DOM element, for example: `<div id='root'></div>`; As a good practise use only one *container* where the element gets rendered.
- React uses *diffing* by the usage of *Virtual DOM* to render the contents. Once the elements are rendered, any change to the component structure means that only the *difference* are applied to the browser DOM. See it in action [here](https://codepen.io/LJdev/pen/jZzzEe)

## Components and States
- We saw basic rendering by encapsulating the *elements* as an expression. 
- *Components* extends this further making these *re-usable* and *isolated*
- How to create re-usable components?
> Using basic JavaScript functions - [Functional Components](https://codepen.io/LJdev/pen/bLvvaQ)  
> Using `classes` - [Class components](https://codepen.io/LJdev/pen/paLOqe)

**Functional Components**
- We can see from this [example](https://codepen.io/LJdev/pen/bLvvaQ) that the function  
```
const Greeting = (params) => {
  return <div>Welcome, {JSON.stringify(params)}</div>
};

ReactDOM.render(<Greeting name="James"/>, document.getElementById('root'));
``` 
gets rendered as: 
> Welcome, {"name":"James"}

As we can see, *params* is an object and it contains all the properties added to the `<Greeting />` component. This *params* in React is called **props**
- Here we could re-use the component, see for [example](https://codepen.io/LJdev/pen/WMzgve) how we are using the same component with different properties (class name)
- We could also [compose](https://codepen.io/LJdev/pen/NyYLjP) the components inside another component. 
- **Props should be read-only** and try to keep the function *pure* (i.e. not modifying the property inside the function).

**Class Components**
- Class component `extends` from `React.Component` and we write it using ES6 class syntax
- If we are using `props`, make sure that we call the super class constructor with `props` and we should also be accessing the props using the context `this.props`. 
- See the above functional component written as [class component](https://codepen.io/LJdev/pen/paLOqe)
- Class components have additonal **advantage over functional components that we can hook up to different lifecycle events and use state management**. 

## States and Lifecycle

- *State* is similar to *props*, but it is private to the component (class) and fully controlled b the component class. 
- State feature is only available to class components
- Continuing with the ticker example
```
const renderTime = (date) => {
  return date.toLocaleString();
}

const renderElement = () => {
  const element = <div>The time is: {renderTime(new Date())}</div>;

  ReactDOM.render(element, document.getElementById('root'));
};

setInterval(renderElement, 1000);
```

We can see that this element is not re-usable. 
- Let's refactor it to make is follow the principle of **re-usablity - using class** (Clock); and **encapsulation using embedding the data it is controlling - time - inside the class**. So, *time* is the data associated with the class `Clock` and `Clock` is responsible for updating it. 
In order to do that, we should make it a class using `class Clock extends React.Component` and encapsulate the data in its state via `this.state = {date: new Date()}`
- How do we handle state changes? 
By using **Life cycle hooks**  
**componentDidMount()** is a life cycle hook which runs after the component has been rendered. Here we can *set up the state of clock to be changed every second*  
**componentWillUnmount()** is a life cycle hook which runs after the component has been destroyed and we can use it for *tear down the timer itself*
- See the code in action [here](https://codepen.io/LJdev/pen/paLxwa)
- Note: **When the state changes, the component will re-render**

**Using States correctly**
- **Do not modify state directly**  
use `this.setState({comment: 'thanks!'})`; If we use `this.state.comment = 'Thanks!'`, the component will not re-render  
We can use `this.state = ...` only in the constructor
- **State update maybe Async**  
Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.  
```
// Wrong
this.setState({
  counter: this.state.counter + this.props.increment,
});
```
The correct usage is  
```
this.setState((prevState, props) => ({
  counter: prevState.counter + props.increment
}));
```
- **State updates are merged**  
If we have state as `this.state = {post: [], comments: []}`, and we do `setState({post: responseFromHTTP})`, it will do a shallow merge and so it keeps `this.state.comments` intact.

- **The data flows down**  
Neither parent nor child components can know if a certain component is stateful or stateless, and they shouldn’t care whether it is defined as a function or a class.  
*This is why state is often called local or encapsulated*. It is not accessible to any component other than the one that owns and sets it.  

## Event Handling in React

- Naming: camelCase  
Like attributes, we use camelCase to specify the event name - *onclick* in HTML becomes *onClick* in React  
For example `<button onclick="printHello()">Say Hello</button>` in React is `<button onClick={printHello}>Say Hello</button>`  
- Use *preventDefault* in React - [Synthetic Events](https://reactjs.org/docs/events.html)  
`return false` to *prevent default behavior in browser* makes no sense in React; We need to call `event.preventDefault()`  
For example, we could `<a href='#' onclick="doSomething(); return false;">Click!</a>` in plain HTML to prevent the default behavior of click on anchor; In React, we need to explicitly call as below: 
```
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}
```
- Here `e` (as above) is a [Synthetic Event](https://reactjs.org/docs/events.html) - which is a cross-browser wrapper around browser's native event. Advantage is that it holds the same interface as browsers native event (like `stopPropogration` and `preventDefault`), except events works the same across all browsers. 
- `addEventListener('event', handler)` is the way we add event handlers in normal HTML, JavaScript; But it React, we just provide a listener / handler to an element when it is initially rendered. See this [example](http://codepen.io/gaearon/pen/xEmzGg?editors=0010) from React docs. 

> You have to be careful about the meaning of `this` in JSX callbacks. In JavaScript, class methods are not `bound` by default. If you forget to bind `this.handleClick` and pass it to `onClick`, this will be `undefined` when the function is actually called.

> This is not React-specific behavior; it is a part of how functions work in JavaScript. Generally, if you refer to a method without `()` after it, such as `onClick={this.handleClick}`, you should bind that method.
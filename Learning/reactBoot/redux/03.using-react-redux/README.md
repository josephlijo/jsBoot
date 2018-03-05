# Using React-Redux
- First install the package using `npm i --save react-redux` 
- We need to import `provider` which is a **higher-order component** and wrap our component inside `provider` and pass in the `store` object as property to the `Provider` component. 
- Provider wraps in the main component and it passes in the `dispatch` method via `this.props.dispatch`

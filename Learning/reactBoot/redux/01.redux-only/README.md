Run `npm i` and `node app.js`  
Follow the below code to work with a `state`, `store` and `action` and see how **we can publish and subcribe (pub/sub) to actions** :  

```
var redux = require('redux');

// Goal scorer app
// State of our app is represented by 'counter'
var counter = 0;

// and this is the 'default' state of our app
var defaultState = counter;

// We need to manage our application state and we bring in Redux. 
// In Redux, the flow is: action -> store -> view

// Action: Some action which needs our application state to be changed
// Store: Which manages the state by running a set of functions based on which action has happened. 
//        It is a collection of functions - called 'Reducer'

// Sample reducer: which manages the state (current goal status) based on an action (goal scored)
var incrementer = function(state = defaultState, action) {
	if (action.type == 'INCREMENT') {
		state = ++state;
	}
	return state;
};

// Now lets create the store
var store = redux.createStore(incrementer); // This will initialize the store by calling all the 'reducer's

// In Redux, state management starts with action
// Action should be dispatched to store
// Store will call the reducer's based on the action
// Store will let all the subscribers know the result of the action 

// Let's subscribe to store to understand when the state changes
store.subscribe(() => {
	console.log("Current state is: ", store.getState());
});

// We have store and reducers
// Time for "Action", let's dispatch it - Publish it
store.dispatch({type: 'INCREMENT'}); // state should 1
store.dispatch({type: ''}); // no state change as there is no reducer to handle it
store.dispatch({type: 'INCREMENT'}); // state should be 2
store.dispatch({type: 'DECREMENT'}); // state should be 2 as our reducers don't action this type as yet

// We can see it is following a pub-sub pattern; we can subscribe to events that are published via dispatch
```
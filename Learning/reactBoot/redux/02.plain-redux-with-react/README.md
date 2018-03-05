# Using Redux with React component
- First install redux `npm i --save redux` 
- Make sure that we follow the folder structure (optional) - we create our store in 'stores/configureStore.js'
- We create a `store` and export it
- In the `index.js` we subscribe to the store once `componentDidMount` and we will `dispatch` the events in the click handlers using `store.dispatch`
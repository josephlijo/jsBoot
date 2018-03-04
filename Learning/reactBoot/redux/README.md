# Redux

Redux is a JavaScript library which helps to manage our data in SPA and it helps us visualize how data flows through our application.  
It is a predictable state container.  
Redux is often used with React; but, Redux cannot be used with other JavaScript frameworks as well.  

## What is a state? 
Let's assume that we have a currency converter application. In this application the state can be visualized as an object:  
```
conversionModel = {
    fromAmt: 3,
    toAmt: 2.82,
    fromCurr: 'USD',
    toCur: 'EUR',
    rate: 0.94
}
```
It can be thought of as `model`.  

Before we jump into more about Redux, let's look at why we came to Redux.  

## Pattens: MVC, MVP, MVVM

**MVC Pattern**
- MVC pattern separates the application concerns into three responsibilities. Models, Views, and Controllers.  
*Model* holds or represents the data. It can be database represetation layer (via ORM), and Business logic at the data level. 
*View* holds the presentation logic and everything the user directly interacts with. 
*Controller* responds to the request from *View* and *action* the view request. This *Controller* action involves giving the *View* the right *Model* to work with. *Controller* is a [Mediator](https://en.wikipedia.org/wiki/Mediator_pattern) between *View* and the *Model* thus avoiding a tight coupling between the View and the Model. 
- In MVC pattern there is a strong link between Model and the View, since View render based on the Model it has. Also, a model can be associated with multiple Views. For example, `Book Model` can be associated with `Author's Book View` and a `Library Book View`. 
- If a Model is changed, all associated View should be informed of this change. View monitors this change using the [Observer pattern](https://en.wikipedia.org/wiki/Observer_pattern).

**MVP Pattern**
- In MVP the application is separated in three responsible areas - *Model*, *View*, and *Presenter*
- Derived from *MVC* pattern replacing *Controller* by *Presenter*. Why? 

**MVVM Pattern**

## Dealing with MVC
- MVC controller pattern helps to seperate the concerns like data (Model), representation of the data (View) and the management of data between Model and View (Controller).
- There are variations of MVC pattern like - MVP, MVVM patterns. 
- Each of these allow two-way communication between Models-and-Views 
- Models represent data in an application 
- Data in a Model is used by Views (which are objects that present data as User Interface). Views are that we interact with on screen. 
- Models can feed data to multiple views
- When a user interact with View, the View via *a medium a Controller OR presenter* may update a data stored in a Model. Changing data in a Model can trigger data changes in other views. Which means that, changing the way one model work, could potentially cause unexpected consequences. 
- In addition to one model serving multiple views, we also have multiple teams working on models and views - which potentially means a great level on concentration on minute details
- Now to solve this problem of two-way data communication between Models-and-Views - comes, Flux

## Now comes, Flux
- Flux is a design pattern developed by Facebook.
- Flux is an alternative to MVC, MVP, or MVVM patterns. All of these MVP, MVVM patterns are basically variations to MVC design pattern. 
- In Flux, data flows in one direction.
- Changes are initiated with `Actions` - which are objects that describes what should change about the data.
- `Actions` are dispatched with a `Dispatcher` - which are objects which sends the data to the appropriate `Store`.
- The `Store` holds the data. *They might be like `Models`, but they are not the same*  
`Store` is responsible for updating OR changing its data. 
- Finally when `Store` updates the data, that change updates the `View`; The screen changes with the new representation. 
- Now when the user interacts with the `View`, a new `Action` is created and the process starts all over again. 
![Flux Flow](Docs/Images/FluxFlow.PNG?raw=true)
- As the application become more big, there would be more `Stores` and `Views` - but, the data flows in one direction.
![Flux Flow with multiple Views](Docs/Images/FluxFlowExt.PNG?raw=true)
- **Flux is not a tool or technology, it is a design pattern**
- The Flux library only include a *generic Dispatcher* that we can use in our applications and as a result the community started creating new libraries: 
1. Reflux
2. Flummox
3. Fluxxor
4. Alt
5. Redux
6. Marty.js
7. McFly
8. DeLorean
8. Lux
9. Fluxy
10. Material Flux

Each of these have different implementation of Flux.  
Redux also has different implementation of Flux: but due to its simplicity it emerged as the winner :) 

## Redux and How it works
- Redux is not Flux. *Redux is Flux like*
- In Flux, data flows in one direction from Action -> Dispatcher -> Stores -> Views
- In Redux, data flows in one direction, but the difference is that, **there is only one store**
- With Redux, we cannot use multiple stores and **since there is only one store, there is no dispatcher; the store will dispatch the actions to view**
- Having one store means **all of you state is in one place, the single store** - we refer to this as **Single source of truth**
![Redux Structure](Docs/Images/ReduxStructure.PNG?raw=true)
- Let's consider a sample scenario to understand the benefits. For example, our application is a github like collaboration site - where we store user information like profile, repository details, gist details etc. **Having them all in single object make it more readable, understandable and can helps to isolate errors**. 
```
var user = {
    profile: {},
    repository: {}, 
    gist: {}
};
```
- But, having them all stored in one place, single store, might now raise concerns about modularity. 
- In Redux, **modularity is achieved via functions**. Instead of breaking down this object into multiple objects, we use functions. For example, 
```
var user = {
    profile: {}, // <- Can be managed by **profile()** function
    repository: {}, // <- Can use **project()** and/or **repository()** for this
    gist: {} // <- Can use **gist()** function for example to manage this section
};
```
- The concept of using `functions` is derived from [Functional Programming Paradigm](https://en.wikipedia.org/wiki/Functional_programming)
- The functional programming details are used in Redux:
1. Pure functions  
    - Same outcome if the function is called with same arguments  
    - No side-effects on memory or IO  
Sample [code](https://codepen.io/LJdev/pen/XZYYvx?editors=0011)
    - Only access local variables
2. Immutability  
    - For example, we have a state: `state = {name: 'John', points: 20}`; If we increase the point by mutating the state object then we will loose history. Immutability advices to make the object immutable. 
    - Then how do we change the *state*? We can make *clone* or *make a copy* using `Object.assign` or `jQuery.extend`
    - With immutability - we can *undo*, we can take *snapshots* of the state, *reload from URL* than refreshing, *time travel* to go back to, say, 3 steps back.  
3. Higher order functions  
4. Composition  (Output from one function becomes the input to another function)
```
function calculateCredit(userId, availableCredit) {
    let current = availableCredit;
    current = afterCouncilCheck(userId, current);
    current = afterTVLicensingCheck(userId, current);
    return current;
}
```
Sample code about [composition](https://codepen.io/LJdev/pen/vdrzxp?editors=0011).
- In Redux, **Composition is used in the store**. The **Reducer** functions that we create to manage specific parts of the state tree are composed and the action and state are sent through each of these reducers **until eventually the state is mutated**
![Redux Reducers](Docs/Images/ReduxReducers_Composition.PNG?raw=true)
- As Redux users what we need to care about is `identify the State` and `write Reducers correctly` and the **Redux store will manage the state**
 
 ## Planning / Structuring a Redux App
 - First and foremost, we need to understand the `Actions` and the `Initial State` of the application. 
 - For example, if we are searching for users and their repositories and gist's in github.com and adding specific users / repositories to our internal database (local storage), we can come up with a sample Action set like: 
 ```
const Actions = {
    SEARCH_USER: 'SEARCH_USER',
    FILTER_REPOSITORIES: 'FILTER_REPOSITORIES',
    SAVE_USER: 'SAVE_USER',
    SAVE_REPOSITORY: 'SAVE_REPOSITORY'
};
 ```
Initial state can be something like: 
```
return {
    savedUsers: [],
    savedRepos: [],
    defaultSuggestions: ['Scott Hanselman', 'David Fowler', 'Damien Edwards']
}
```

### Thanks and references
- [MVC, MVP, MVVM Patterns](https://medium.com/@ankit.sinhal/mvc-mvp-and-mvvm-design-pattern-6e169567bbad)
- [Learning Redux](https://www.linkedin.com/learning/learning-redux/build-your-first-reducer) by Alex Banks
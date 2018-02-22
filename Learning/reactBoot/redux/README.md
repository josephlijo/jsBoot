# Redux

## MVC, MVP, MVVM patterns

## Dealing with MVC
- Design pattern developed by Facebook
- An alternative to MVC, MVP, or MVVM pattern (all of these are basically variations to MVC design pattern)
- Each of these allow two-way communication between Models-and-Views 
- Models represent data in an application 
- Data in a Model is used by Views (which are objects that present data as User Interface). Views are that we interact with on screen. 
- Models can feed data to multiple views
- When a user interact with View, the View via *a medium a Controller OR presenter* may update a data stored in a Model. Changing data in a Model can trigger data changes in other views. Which means that, changing the way one model work, could potentially cause unexpected consequences. 
- In addition to one model serving multiple views, we also have multiple teams working on models and views - which potentially means a great level on concentration on minute details
- Now to solve this - comes, Flux

## Now comes, Flux
- In Flux, data flows in one direction
- Changes are initiated with `Actions`
- 
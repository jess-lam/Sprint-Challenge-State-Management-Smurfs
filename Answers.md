1. What problem does the context API help solve?
It eliminates prop drilling by providing a way to share values without passing it through every level of the tree.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are objects that contain packets of info that consist of an action type and associated data.

Reducers are pure functions that update our state.

The store is an object. It is the single source of truth because it hold all our global state and that application state is immutable.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is used throughout the application and many components use it. That is a good time to use application state compared to component state, where the state is just used locally. 

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is a middleware and it provides the ability to handle asynchronous operations inside out Action Creators. 

It returns functions instead of objects. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I think it depends on the project. I would probably use context api for simpler projects like this and reducer for larger applications because I like having my state in a single place.

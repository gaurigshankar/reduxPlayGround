
#### Keypoints
* State is immutable / read only
* Changes to the state can be done by dispatching action
* action is a plain JS function
* Only way to modify State is dispatching anction
* State is a single tree
* reducers should always be a pure function


#### What is Pure function
* return value solely depends on input param
* no database / network calls involved
* If pure functions is called with same arguments, will always retun same value
* Predictable
* Does not modify input value

### UI / Views are more predictable when UI/Views is decribed as pure function of application of state. This is pioneered by React

#### Pure functions in Redux  
* Compliments Pure Function
* State Mutation in application needs to be pure functions
* Reducer takes previous state and action dispatched. It returns next state of application

#### Reducer ---> To describe State Mutation
* A function that takes previous state & action dispatched and creates the next state of applications is called reducer
* A Reducer should always be a pure function


#### Getting Started with Redux
* Create Store from Redux
* pass on reducer to the store
* dispatch an action
* subscribe to changes in the state.


#### Different ways to avoid mutation
* Use array.concat or ES6 Spread instead of array.push
* Use array.slice instead of splice
* use ES7 Object spread operator or ES6 Object.assign


#### CombineReducers
* CombineReducer can be used to combine multiple reducers

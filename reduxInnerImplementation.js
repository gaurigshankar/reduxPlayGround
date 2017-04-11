// This is a redux store implemented from scratchh as a bare min functionality
// Based on Dan Abromov https://egghead.io/lessons/javascript-redux-implementing-store-from-scratch
// Example available in my JSBin http://jsbin.com/meboxolefo/edit?js,console,output



// This is the skeleton of the Store provided by Redux Library
// subscribe helps in adding a listener that needs to change based on changes in state.
// whenever dispatch is called all the listeners are called so as to notify them
const createStore = (reducer) => {
  let state;
  let listeners = [];

  const getState = () => state;
  const dispatch = (action) => {
    state = reducer(state,action);
    listeners.forEach(listener => listener());
  }

  const subscribe = (listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l!==listener)
    }
  };

  dispatch({});
  return { getState, dispatch, subscribe};
};


// ----------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------

// Using The custom store thats created above

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state
  }
};
// Initialize the custom store created with a reducer;
const store = createStore(counter);


//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
// plain html  demo usage of custom store
const renderInPlainHTML = () => {
  document.body.innerText = store.getState();
};
//subscribe to changes in state.
store.subscribe(renderInPlainHTML);
renderInPlainHTML();
document.addEventListener('click', () => {
  store.dispatch({type: 'INCREMENT'});
});
// -----------------------------------------------------------------------------
// React way of demo usage of custom store
// React Component for counter
const Counter = ({value, onIncrement, onDecrement}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

// render Component using the custom redux
const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={ () =>
          store.dispatch({type: 'INCREMENT'})
      }
      onDecrement={ () =>
          store.dispatch({type: 'DECREMENT'})
      }
     />,
     document.getElementById('root')
  );
}

store.subscribe(render);
render();
// -------------------------------------

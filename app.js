// THE CORE OF REDUX

// ACTIONS

const incrementAction = { 
  type: 'INCREMENT',
  amount: 3, 
};

const decrementAction = { 
  type: 'DECREMENT',
  amount:4,
 };

// STORE

function createStore(reducer) {
  let state = 0;

  const getState = () => (state);

  // calls reducer which behaves according to action
  const dispatch = (action) => {
    // changes "let state"
    // state = reducer(let state, incrementAction/decrementAction);
    state = reducer(state, action);
  };

  return {
    getState,
    dispatch,
  };
}

// REDUCER

function reducer(state, action) {
  if (action.type === 'INCREMENT') {
    return state + action.amount;
  } else if (action.type === 'DECREMENT') {
    return state - action.amount;
  } else {
    return state;
  }
}

const store=createStore(reducer);

store.dispatch(incrementAction)

console.log(store.getState());

store.dispatch(incrementAction)

console.log(store.getState());

store.dispatch(decrementAction)

console.log(store.getState());



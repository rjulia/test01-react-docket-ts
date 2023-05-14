import React, { useReducer } from 'react'

type State = {
  counter: number,
}

const initialState:State = {
  counter: 100,
}
enum ACTIONS {
  INCREMENT = 'increment',
  DECREMENT = 'decrement',
}

type ACTIONTYPES =
  | { type: ACTIONS.INCREMENT; payload: number }
  | { type: ACTIONS.DECREMENT; payload: number };

function counterReducer(state: typeof initialState, action: ACTIONTYPES) {
  switch (action.type) {
  case ACTIONS.INCREMENT:
    return {
      ...state,
      counter: state.counter + action.payload,
    }
  case ACTIONS.DECREMENT:
    return {
      ...state,
      counter: state.counter - action.payload,
    }
  default:
    throw new Error('Bad action')
  }
}

function UseReducerComponent() {
  const [state, dispatch] = useReducer(counterReducer, initialState)
  return (
    <div>
      <div>{state.counter}</div>
      <div>
        <button
          type='button'
          onClick={() => dispatch({
            type: ACTIONS.INCREMENT,
            payload: 10,
          })}
        >
          Increment
        </button>
        {' '}
        |
        <button
          onClick={() => dispatch({
            type: ACTIONS.DECREMENT,
            payload: 5,
          })}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}
export default UseReducerComponent

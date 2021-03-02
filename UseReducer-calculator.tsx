import React, { useReducer, useState, Reducer } from 'react';
import { Button, TextArea } from 'advania-ui';

type State = {
  result: number,
  input: number
}

const Test = () => {
  const [counter, setCounter] = useState<number>(0);

  const initialState = {
    result: 0,
    input: 0
  }

  const [state, dispatch] = useReducer<Reducer<State, any>>(
    (oldState, action) => {
      switch (action.type) {
        case 'setInput':
          return {
            ...oldState,
            input: action.payload,
          };
        case 'increment':
          return {
            ...oldState,
            result: oldState.result + action.payload,
          };
        case 'decrease':
          return {
            ...oldState,
            result: oldState.result - action.payload,
          };
        case 'multiply':
          return {
            ...oldState,
            result: oldState.result * action.payload,
          };
        default:
          return oldState
      }
    }, initialState);

  return (
    <div className="container mx-auto my-4 px-4">
      <h1 className="text-2xl text-bold">State</h1>
      <p>{counter}</p>
      <Button onPress={() => setCounter(counter + 1)} variant="blue">hækka</Button>
      <h1 className="text-2xl text-bold">Reducer</h1>
      <p>{state.result}</p>
      <TextArea
        value={state.input.toString()}
        onChange={(val) => dispatch({ type: 'setInput', payload: Number(val) })}
      />
      <div className="flex">
        <Button onPress={() => dispatch({ type: 'increment', payload: state.input })} variant="white">+</Button>
        <Button onPress={() => dispatch({ type: 'decrease', payload: state.input })} variant="white">-</Button>
        <Button onPress={() => dispatch({ type: 'multiply', payload: state.input })} variant="white">*</Button>
      </div>
    </div>
  );
};

export default Test;
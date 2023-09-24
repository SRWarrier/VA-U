import { useReducer } from "react";

function MyComponent() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const action = {
    type: "ActionType",
  };

  return <button onClick={() => dispatch(action)}>Click me</button>;
}

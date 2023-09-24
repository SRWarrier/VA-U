import { useReducer, useState } from "react";

type stateProp = { currentTheme: string; currentPrimary: string };
type actionProp = {
  type: string;
  currentTheme?: string;
  currentPrimary?: string;
};

function reducer(state: stateProp, action: actionProp) {
  if (action.type === "ripplr") {
    return { ...state, currentTheme: "dark" };
  } else {
    return { ...state, currentTheme: "light" };
  }
}

const useThemeChanger = (
  currentTheme: string,
  currentPrimary: string = "green"
) => {
  const [state, dispatch] = useReducer(reducer, {
    currentTheme: currentTheme,
    currentPrimary: currentPrimary,
  });
};

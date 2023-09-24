import { Dispatch, createContext, useState } from "react";

const [themeColor, setThemeColor] = useState({
  scheme: "dark",
  color: "Sunset",
});

interface ThemeState {
  scheme: string;
  color: string;
}

interface ThemeContextProps {
  state: ThemeState;
  dispatch: Dispatch<ThemeState>;
}

const ThemeContext = createContext<ThemeContextProps | null>(null);

export { ThemeContext };

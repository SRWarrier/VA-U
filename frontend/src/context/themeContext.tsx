import { createContext } from "react";

export interface ThemeContextProps {
  theme: string;
  themeSetter: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  themeSetter: () => {},
});

export default ThemeContext;

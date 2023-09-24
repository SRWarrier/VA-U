import { theme } from "antd";
import colorPresets from "./themesets/presets";

const { darkAlgorithm, defaultAlgorithm } = theme;

const DarkTheme = {
  algorithm: darkAlgorithm,
};

const LightTheme = {
  algorithm: defaultAlgorithm,
};
const getCustomTheme = (scheme: string | undefined, theme: string) => {
  const selectedPreset = colorPresets.find((preset) => preset.label === theme);
  const preset = selectedPreset ? selectedPreset : colorPresets[0];
  const presetTheme = {
    token: {
      colorPrimary: preset.colorPrimary,
    },
    algorithm: scheme === "dark" ? darkAlgorithm : defaultAlgorithm,
  };

  return presetTheme;
};

const Themes = {
  DarkTheme,
  LightTheme,
  getCustomTheme,
};

export { Themes };

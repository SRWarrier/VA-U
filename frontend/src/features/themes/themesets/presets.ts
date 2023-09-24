export interface PresetProps {
  label: string;
  colorPrimary: string;
  colorBgBase: string;
}

const colorPresets: Array<PresetProps> = [
  {
    label: "Sunset",
    colorPrimary: "#FF6B6B",
    colorBgBase: "#1A1A1D",
  },
  {
    label: "Ocean",
    colorPrimary: "#4FC3F7",
    colorBgBase: "#F5F5F5",
  },
  {
    label: "Midnight",
    colorPrimary: "#536DFE",
    colorBgBase: "#121212",
  },
  {
    label: "Nature",
    colorPrimary: "#66BB6A",
    colorBgBase: "#E8F5E9",
  },
  {
    label: "Rose",
    colorPrimary: "#E57373",
    colorBgBase: "#FCE4EC",
  },
  {
    label: "Royal",
    colorPrimary: "#673AB7",
    colorBgBase: "#F3E5F5",
  },
  {
    label: "Limeade",
    colorPrimary: "#9CCC65",
    colorBgBase: "#E0F2F1",
  },
  {
    label: "Golden Hour",
    colorPrimary: "#FFD54F",
    colorBgBase: "#FFECB3",
  },
  {
    label: "Mystic",
    colorPrimary: "#7986CB",
    colorBgBase: "#EDE7F6",
  },
  {
    label: "Crimson",
    colorPrimary: "#D32F2F",
    colorBgBase: "#F9FBE7",
  },
];
export default colorPresets;

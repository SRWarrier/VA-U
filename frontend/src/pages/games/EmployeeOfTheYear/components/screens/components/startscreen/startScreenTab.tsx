import StarterPackPage from "../../starterPackPage";
import EOTMGameRules from "../gameRules";

const StartScreenItems = [
  {
    key: "1",
    label: "Rules",
    children: <EOTMGameRules />,
    disabled: true,
  },
  {
    key: "2",
    label: "Starter Pack",
    children: <StarterPackPage />,
    disabled: true,
  },
];

export { StartScreenItems };

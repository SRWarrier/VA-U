import { CharacterType } from "../EOTM_types/CharacterDataTypes";

interface FinanceProps extends CharacterType {
  stickler: boolean;
  followupFactor: number;
}

const finance: FinanceProps[] = [
  {
    name: "Prakriya",
    stickler: true,
    followupFactor: 0.9,
    summary:
      "Prakirya, a meticulous finance executive, follows rules and procedures to the point, maintaining a steadfast commitment to accuracy; her follow-up frequency is closely tied to her satisfaction, and she aims to strike a balance between structure and adaptability.",
    imageURL: "/game_assets/EOTM/Client2.jpeg",
  },
  {
    name: "Avivaad",
    stickler: true,
    followupFactor: 0.6,
    summary:
      "Avivaad, a finance executive with a relaxed approach, takes a measured pace in follow-ups, valuing a thorough understanding before taking action; his adaptable nature allows him to navigate tasks without being overly rigid, promoting an open and flexible work environment.",
    imageURL: "/game_assets/EOTM/Client2.jpeg",
  },
  {
    name: "Aalas",
    stickler: false,
    followupFactor: 0.4,
    summary:
      "Aalas, a finance executive notorious for laid-back approach, often procrastinates tasks, exhibits a casual communication style, and tends to delay follow-ups due to relaxed demeanor.",
    imageURL: "/game_assets/EOTM/Client2.jpeg",
  },
];

export { finance };

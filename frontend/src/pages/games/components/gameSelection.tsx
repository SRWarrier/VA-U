import { Typography, Tag } from "antd";
import GameActionBar from "./gameActionBar";
import { useSpring, animated } from "@react-spring/web";
import "./gameSelection.css";

const { Title, Paragraph } = Typography;

const GameSelectionScreen = () => {
  const games = [
    {
      name: "Employee of the Year",
      icon: <img src="/src/assets/gameAssets/EOTY/icon.png" alt="EOTY" />,
      description:
        "An educational game to understand logistics business. Startegies your business plan and make profit.",
      tag: "Strategic, Simulation",
      gamelink: "eoty",
    },
    {
      name: "Tetris",
      icon: <img src="/src/assets/gameAssets/TETRIS/icon.png" alt="TETRIS" />,
      description: "Match color and shape. Win the highest score.",
      tag: "Strategic",
      gamelink: "tetris",
    },
    {
      name: "RipQuiz",
      icon: <img src="/src/assets/gameAssets/RIPQUIZ/icon.png" alt="RIPQUIZ" />,
      description: "Quiz your knowledge about RIPPLR",
      tag: "Trivia, Quiz",
      gamelink: "ripquiz",
    },
  ];

  const iconAnimation = useSpring({
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 300, friction: 20 },
  });

  return (
    <div className="game-selection-container">
      <Title level={1} style={{ position: "absolute", top: "10%" }}>
        RIPPLR GAME ZONE
      </Title>
      <div className="game-icons">
        {games.map((game, index) => (
          <div key={index} className="game-icon-container">
            <animated.div style={iconAnimation} className="game-icon">
              {game.icon}
            </animated.div>
            <div className="game-details">
              <Tag color="gold">{game.tag}</Tag>
              <Title
                level={4}
                style={{ margin: "10px 0", textAlign: "center" }}
              >
                {game.name}
              </Title>
              <div style={{ height: "60px" }}>
                <Paragraph> {game.description}</Paragraph>
              </div>
            </div>
            <GameActionBar gamelink={game.gamelink} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameSelectionScreen;

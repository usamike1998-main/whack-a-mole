import { useGame } from "./GameContext";

export default function GameMenu() {
  const { restartGame, score } = useGame();
  return (
    <div className="top">
      <div className="menu-item">The score is:{score}</div>
      <div className="menu-item" onClick={restartGame}>
        Restart a game
      </div>
    </div>
  );
}

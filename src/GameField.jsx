import { useGame } from "./GameContext";
import GameHole from "./GameHole";

export default function GameField() {
  const { field } = useGame();

  return (
    <>
      <ul className="field">
        {field.map((isMole, i) => (
          <GameHole key={i} isMole={isMole}></GameHole>
        ))}
      </ul>
    </>
  );
}

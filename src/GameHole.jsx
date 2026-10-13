import GameMole from "./GameMole";
import { useGame } from "./GameContext";
export default function GameHole({ isMole }) {
  const showMole = isMole ? <GameMole /> : "";
  const { whackAHole } = useGame();

  return (
    <>
      <div className="field__hole hole" onClick={() => whackAHole(isMole)}>
        {showMole}
      </div>
    </>
  );
}

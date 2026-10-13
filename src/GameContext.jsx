import { createContext, useState, useContext } from "react";

const HOLESNUM = 9;

const GameContext = createContext();
export function GameProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [field, setField] = useState(createHoles(HOLESNUM));
  const [score, setScore] = useState(0);

  function startGame() {
    setScore(0);
    setField(createHoles(HOLESNUM));
    setIsPlaying(true);
  }

  function restartGame() {
    setIsPlaying(false);
  }

  function whackAHole(hasMole) {
    if (hasMole) {
      setScore((prev) => prev + 1);
    }
    setField(createHoles(HOLESNUM));
  }

  const value = {
    field,
    score,
    isPlaying,
    startGame,
    restartGame,
    whackAHole,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

function createHoles(holesNum) {
  const moleIndex = Math.floor(Math.random() * holesNum);
  const holes = [];
  for (let i = 0; i < holesNum; i++) {
    i === moleIndex ? holes.push(true) : holes.push(false);
  }
  return holes;
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) throw Error("Game context must be used within GameProvider.");
  return context;
}

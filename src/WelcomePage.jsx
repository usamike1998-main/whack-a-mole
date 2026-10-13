import { useGame } from "./GameContext";
export default function WelcomePage() {
  const { startGame } = useGame();
  return (
    <>
      <h2>Welcome to the Game!</h2>
      <p>
        Instructions. Just smack a hole and maybe you'll whack a Mole. Try your
        luck and reaction!
      </p>

      <button onClick={startGame}>Play a Game!</button>
    </>
  );
}

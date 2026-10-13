import WelcomePage from "./WelcomePage.jsx";
import GamePage from "./GamePage.jsx";
import { useGame } from "./GameContext";

export default function App() {
  const { isPlaying } = useGame();
  const currentPage = isPlaying ? <GamePage /> : <WelcomePage />;
  return (
    <>
      <h1>WHACK A MOLE</h1>
      {currentPage}
    </>
  );
}

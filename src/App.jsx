import WelcomePage from "./WelcomePage.jsx";
import GamePage from "./GamePage.jsx";

export default function App() {
  const currentPage = isPlaying ? <WelcomePage /> : <GamePage />;
  return (
    <>
      <h1>WHACK A MOLE</h1>
      {currentPage}
    </>
  );
}

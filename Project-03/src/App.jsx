import { useState } from "react"
import StartGame from "./components/StartGame"
import Gameplay from "./components/Main";

function App() {

  const[isGameStarted, setIsGameStarted]=useState(false);

  const toggleGameplay = () => {
    setIsGameStarted((prev) => !prev);
  }

  return (
    <>
    {isGameStarted ? <Gameplay /> : <StartGame toggle={toggleGameplay} />}
    </>
  )
}

export default App

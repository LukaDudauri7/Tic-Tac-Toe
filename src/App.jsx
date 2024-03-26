import { useState } from "react"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
function App() {
  const [actvivePlayer, setActivePlayer] = useState('X');
  function handleSelectSquare() {
    setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X');
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={actvivePlayer === 'X'}/>
          <Player initialName="Player 2" symbol="O" isActive={actvivePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={actvivePlayer}/>
      </div>
    </main>
  )
}

export default App

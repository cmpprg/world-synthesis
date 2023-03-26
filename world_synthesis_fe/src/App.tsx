import { useState } from 'react'
import heartImage from './assets/red_heart.gif'

const App = () => {
  const [answer, setAnswer] = useState("");

  const handleButtonClick = () => {
    setAnswer("To the end of the cul-de-sac.")
  }

  return (
    <div className="App">
      <h1>World Synthesis</h1>
      <h2>Synthesizing a better world through collaboration</h2>

      <div style={{display: "flex", justifyContent: "space-around", alignItems: "center"}}>
        <h3>How much does Ryan</h3>
        <img src={heartImage} className="heart" alt="heart love" />
        <h3>Michelle?</h3>
      </div>

      <div className="card">
        <button style={{border: '1px solid black'}}onClick={handleButtonClick}>
          Click me to find out
        </button>
      </div>
      <h1>{answer}</h1>
    </div>
  )
}

export default App

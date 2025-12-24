import './App.css'
import {Card} from "./components/molecules/card"

function App() {
  const id = 1
  const name = "bulbassaur"
  const img = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  const stats = [
    {
      name:"hp",
      value:"20"
    },
    {
      name:"at",
      value:"15"
    },
    {
      name:"df",
      value:"10"
    },
    {
      name:"sp",
      value:"5"
    },
  ]
  
  const types = [
    "water",
    "fire",
    "steel",
    "fairy"
  ]

   return (
    <>
      <Card card_id={id} card_name={name} card_img={img} card_stats={stats} card_types={types}/>
    </>
  )
}

export default App

import './App.css'
import {Text} from "./components/atoms/text"
import {Button} from "./components/atoms/button"

function App() {
   return (
    <>
      <Text as='h1' variant="h1" className="UpperCase underline right margin-lg"> Ola Mundo </Text>
      <Button href='https://term.ooo/' variant='primary' size='medium'> botao </Button>
      <Button href='https://term.ooo/' variant='secondary' size='medium'> botao </Button>
      <Button href='https://term.ooo/' variant='danger' size='medium'> botao </Button>
      <Button href='https://term.ooo/' variant='ghost' size='medium'> botao </Button>
    </>
  )
}

export default App

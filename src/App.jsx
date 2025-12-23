import './App.css'
import {Text} from "./components/atoms/text"
import {Button} from "./components/atoms/button"
import {Image} from "./components/atoms/images"

function App() {
   return (
    <>
      <Text as='h1' variant="h1" className="UpperCase underline right margin-lg"> Ola Mundo </Text>
      <Button variant='primary' size='medium'> botao </Button>
      
      <Image variant='logo' src='https://fastly.picsum.photos/id/1028/200/200.jpg?hmac=thf3cKyzvjBi3Rnf8-hvYRl8MmEPFPIq1G8nJVvoT4I' alt='teste'/>

      <Image variant='display' src='https://fastly.picsum.photos/id/1028/200/200.jpg?hmac=thf3cKyzvjBi3Rnf8-hvYRl8MmEPFPIq1G8nJVvoT4I' alt='teste'/>
      
      <Image variant='card' src='https://fastly.picsum.photos/id/1028/200/200.jpg?hmac=thf3cKyzvjBi3Rnf8-hvYRl8MmEPFPIq1G8nJVvoT4I' alt='teste'/>
      
    </>
  )
}

export default App

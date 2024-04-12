import { Navbar } from './components/Navbar/Navbar.jsx'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx'
import { ItemCount } from './components/ItemCount/ItemCount.jsx'
const App = () => {

  const itemListContainerProps = {
    greeting: "Hello, Andres, welcome to our store!",
    bgBlue: false
  }

  return (
    <>
      <Navbar/>
      <ItemListContainer 
        { ...itemListContainerProps}     
        // greeting = "Hello, Andres, welcome to our store!" 
        // bgBlue = { false }
      />
      <ItemCount/>  
    </>
    )

}

export default App

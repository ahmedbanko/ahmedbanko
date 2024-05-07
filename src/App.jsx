import NavBar from './components/MyNavBar'
import { useState } from 'react'

function App() {

  const [isDark, setIsDark] = useState(false);

  function handleSetDark(){
    setIsDark(prevVal => !prevVal)
    document.body.classList.toggle("dark");
  }
  return (
    <>
    <NavBar toggleIsDark={handleSetDark} isDarkMode={isDark}></NavBar>
    </>
  )
}

export default App

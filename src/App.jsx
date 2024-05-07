import NavBar from './components/MyNavBar'
import { useState } from 'react'

function App() {

  const [isDark, setIsDark] = useState(false);
  const [selectedTab, setSelectedTab] = useState('{ A Banko }');

  function handleTabSelection(target){
    setSelectedTab(target);
  }

  function handleSetDark(){
    setIsDark(prevVal => !prevVal);
    document.body.classList.toggle("dark");
  }
  return (
    <>
    <NavBar toggleIsDark={handleSetDark} isDarkMode={isDark} onSelectTab={handleTabSelection} selectedTab={selectedTab}></NavBar>
    </>
  )
}

export default App

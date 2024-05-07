import NavBar from './components/MyNavBar'
import { useState } from 'react'
import Projects from './components/Projects';

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
    <div className='flex justify-center items-center h-screen'>
      <Projects/>
    </div>
    </>
  )
}

export default App

import NavBar from "./components/MyNavBar";
import { useState } from "react";
import Projects from "./components/Projects";

function App() {
  const [isDark, setIsDark] = useState(false);
  const [selectedTab, setSelectedTab] = useState("projects");

  function handleTabSelection(target) {
    setSelectedTab(target);
  }

  function handleSetDark() {
    setIsDark((prevVal) => !prevVal);
    document.body.classList.toggle("dark");
  }

  const contentMap = {
    // "{ A Banko }": <About />,
    projects: <Projects />,
    // stack: <Stack/>,
    // education: <Education/>,
    // "why hire me?": <WhyMe/>,
  };

  return (
    <>
      <NavBar
        toggleIsDark={handleSetDark}
        isDarkMode={isDark}
        onSelectTab={handleTabSelection}
        selectedTab={selectedTab}
      ></NavBar>
      <div className="flex justify-center items-center my-24">
        {contentMap[selectedTab]}
      </div>
    </>
  );
}

export default App;

import NavBar from "./components/MyNavBar";
import { useState } from "react";
import Projects from "./components/Projects";

function App() {
  const [isDark, setIsDark] = useState(true);
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
      <div className="flex flex-wrap justify-center px-3 sm:px-4 lg:px-8 my-10 md:my-20">
        <div className="flex flex-wrap p-6 rounded-xl bg-bodyBg-light bg-opacity-60 dark:bg-opacity-60 dark:bg-bodyBg-dark">
          {contentMap[selectedTab]}
        </div>
      </div>
    </>
  );
}

export default App;

import NavBar from "./components/MyNavBar";
import { useState } from "react";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  const [isDark, setIsDark] = useState(true);
  const [selectedTab, setSelectedTab] = useState("{ A Banko }");

  function handleTabSelection(target) {
    setSelectedTab(target);
  }

  function handleSetDark() {
    setIsDark((prevVal) => !prevVal);
    document.body.classList.toggle("dark");
  }

  const contentMap = {
    "{ A Banko }": <About />,
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
        <div className="flex w-screen max-w-3xl p-6 rounded-xl bg-bodyBg-light bg-opacity-60 dark:bg-opacity-60 dark:bg-bodyBg-dark">
          <div>
          <h1 className="inline-block text-3xl font-extrabold text-bodyText-primaryLight tracking-tight dark:text-bodyText-primaryDark mb-6">
            {selectedTab.toUpperCase()}
          </h1>
          {contentMap[selectedTab]}
          </div>
         
        </div>
      </div>
    </>
  );
}

export default App;

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
      <div className="flex justify-center my-10 md:my-20">
        <div className="w-screen max-w-3xl mx-4 md:mx-0">
          <div className="p-6 rounded-xl bg-bodyBg-light bg-opacity-60 dark:bg-opacity-60 dark:bg-bodyBg-dark">
            <h1 className="text-3xl font-extrabold text-bodyText-primaryLight tracking-tight dark:text-bodyText-primaryDark mb-6">
              {selectedTab.toUpperCase()}
            </h1>
            <div className="max-w-3xl">
              {contentMap[selectedTab]}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

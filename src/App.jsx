import NavBar from "./components/MyNavBar";
import { useState, useEffect } from "react";
import Projects from "./components/Projects";
import About from "./components/About";
import { ABOUT_STATEMENT } from "./data";
import Stack from "./components/Stack";

function App() {
  const [isDark, setIsDark] = useState(true);
  const [selectedTab, setSelectedTab] = useState("{ A Banko }");
  const [aboutTabIsLoaded, setAboutIsLoaded] = useState(false);

  useEffect(() => {
    // This effect will run after the About component has rendered
    const timer = setTimeout(() => {
      setAboutIsLoaded(true);
    }, ABOUT_STATEMENT.length * 30);
    return () => clearTimeout(timer);
  }, []);

  function handleTabSelection(target) {
    setSelectedTab(target);
  }

  function handleSetDark() {
    setIsDark((prevVal) => !prevVal);
    document.body.classList.toggle("dark");
  }

  const contentMap = {
    "{ A Banko }": <About loaded={aboutTabIsLoaded} />,
    projects: <Projects />,
    stack: <Stack />,
    // education: <Education/>,
    // "why hire me?": <WhyMe/>,
    // "contact": <Contact/>,
  };

  return (
    <>
      <NavBar
        toggleIsDark={handleSetDark}
        onSelectTab={handleTabSelection}
        selectedTab={selectedTab}
      />
      <div className="flex justify-center my-10 md:my-20">
        <div className="w-screen max-w-3xl mx-4 md:mx-0 p-6 rounded-xl bg-bodyBg-light bg-opacity-60 dark:bg-opacity-60 dark:bg-bodyBg-dark">
          <h1 className="text-3xl font-extrabold text-bodyText-primaryLight tracking-tight dark:text-bodyText-primaryDark mb-6">
            {selectedTab.toUpperCase()}
          </h1>
          <div className="max-w-3xl h-[27rem] md:h-[22.5rem] h-max-h-screen overflow-auto">
            {contentMap[selectedTab]}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import NavBar from "./components/MyNavBar";
import { useState, useEffect } from "react";
import Projects from "./components/Projects";
import About from "./components/About";
import { ABOUT_STATEMENT } from "./data";
import Stack from "./components/Stack";
import Education from "./components/Education";
import WhyMe from "./components/WhyMe";
import Contact from "./components/Contact";

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
    stack: <Stack />,
    education: <Education />,
    "why hire me?": <WhyMe />,
    contact: <Contact />,
  };

  return (
    <>
      <NavBar
        toggleIsDark={handleSetDark}
        onSelectTab={handleTabSelection}
        selectedTab={selectedTab}
      />
      <div className="flex justify-center my-10 md:my-20">
        <div className="w-screen max-w-3xl mx-4 md:mx-0 p-6 rounded-xl bg-bodyBg-light bg-opacity-90 dark:bg-opacity-90 dark:bg-bodyBg-dark mb-10 md:mb-20">
          {contentMap[selectedTab]}
        </div>
      </div>
    </>
  );
}

export default App;

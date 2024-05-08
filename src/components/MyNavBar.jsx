import { useState } from "react";
import { IoSunny, IoMoon, IoMenu, IoClose } from "react-icons/io5";
import NavBarLabel from "./NavBarLabel";

export default function NabBar({
  isDarkMode,
  toggleIsDark,
  onSelectTab,
  selectedTab,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((oldVal) => !oldVal);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  let colorModeBu = isDarkMode ? (
    <IoSunny
      className="text-navBarText-dark size-4.5 md:hover:fill-yellow-300"
      onClick={toggleIsDark}
    />
  ) : (
    <IoMoon
      className="text-navBarText-light size-4.5 md:hover:fill-yellow-300"
      onClick={toggleIsDark}
    />
  );

  let navBarBgColor = isDarkMode
    ? "bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700"
    : "bg-gradient-to-t from-zinc-300 to-zinc-200";

  const handleSelectTab = (tab) => {
    if (isOpen) {
      closeMenu();
    }
    onSelectTab(tab);
  };

  const navBarLabels = (
    <>
      <NavBarLabel
        text="{ A Banko }"
        onSelectTab={handleSelectTab}
        selectedTab={selectedTab}
      />
      <NavBarLabel
        text="projects"
        onSelectTab={handleSelectTab}
        selectedTab={selectedTab}
      />
      <NavBarLabel
        text="stack"
        onSelectTab={handleSelectTab}
        selectedTab={selectedTab}
      />
      <NavBarLabel
        text="education"
        onSelectTab={handleSelectTab}
        selectedTab={selectedTab}
      />
      <NavBarLabel
        text="why hire me?"
        onSelectTab={handleSelectTab}
        selectedTab={selectedTab}
      />
    </>
  );

  return (
    <nav className={`p-4 ${navBarBgColor}`}>
      <div className="flex  justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navBarLabels}
              </div>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md text-navBarText-light dark:text-navBarText-dark md:hover:text-white md:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-expanded="false"
            >
              {isOpen ? (
                <IoClose className="block h-6 w-6" />
              ) : (
                <IoMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        <div className="flex items-center">{!isOpen && colorModeBu}</div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">{navBarLabels}</div>
        </div>
      )}
    </nav>
  );
}

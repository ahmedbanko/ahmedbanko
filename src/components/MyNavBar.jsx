import { useState } from "react";
import { IoSunny, IoMoon, IoMenu, IoClose } from "react-icons/io5";
import NavBarButton from "./NavBarButton";

export default function NabBar({ toggleIsDark, onSelectTab, selectedTab }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((oldVal) => !oldVal);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleSelectTab = (tab) => {
    if (isOpen) {
      closeMenu();
    }
    onSelectTab(tab);
  };

  const navBarButtons = (
    <>
      <NavBarButton
        text="{ A Banko }"
        onSelectTab={handleSelectTab}
        selectedTab={selectedTab}
      />
      <NavBarButton
        text="projects"
        onSelectTab={handleSelectTab}
        selectedTab={selectedTab}
      />
      <NavBarButton
        text="stack"
        onSelectTab={handleSelectTab}
        selectedTab={selectedTab}
      />
      <NavBarButton
        text="education"
        onSelectTab={handleSelectTab}
        selectedTab={selectedTab}
      />
      <NavBarButton
        text="why hire me?"
        onSelectTab={handleSelectTab}
        selectedTab={selectedTab}
      />
      <NavBarButton
        text="contact"
        onSelectTab={handleSelectTab}
        selectedTab={selectedTab}
      />
    </>
  );

  return (
    <nav
      className={
        "p-4 dark:bg-gradient-to-r dark:from-custom-gradient-dark-start dark:via-custom-gradient-dark-via dark:to-custom-gradient-dark-end bg-gradient-to-r from-custom-gradient-light-start to-custom-gradient-light-end"
      }
    >
      <div className="flex  justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navBarButtons}
              </div>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md text-navBarText-light dark:text-navBarText-dark md:hover:text-white md:hover:bg-gray-700 focus:outline-none"
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
        <div className="flex items-center">
          {!isOpen && (
            <>
              <IoSunny
                className="text-navBarText-dark size-4.5 md:hover:fill-yellow-300 hidden dark:block"
                onClick={toggleIsDark}
              />
              <IoMoon
                className="text-navBarText-light size-4.5 md:hover:fill-zinc-900 block dark:hidden"
                onClick={toggleIsDark}
              />
            </>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navBarButtons}
          </div>
        </div>
      )}
    </nav>
  );
}

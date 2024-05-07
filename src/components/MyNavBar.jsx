import { IoSunny, IoMoon } from "react-icons/io5";
import NavBarLabel from "./NavBarLabel.jsx";


export default function NabBar({ isDarkMode, toggleIsDark, onSelectTab, selectedTab}) {
  let colorModeBu = isDarkMode ? (
    <IoSunny
      className="text-navBarText-dark md:w-6 lg:w-8 xl:w-10 hover:fill-yellow-300"
      onClick={toggleIsDark}
    />
  ) : (
    <IoMoon
      className="text-navBarText-light md:w-6 lg:w-8 xl:w-10 hover:fill-yellow-300"
      onClick={toggleIsDark}
    />
  );

  let navBarBgColor = isDarkMode
    ? "bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700"
    : "bg-gradient-to-t from-zinc-300 to-zinc-200";

  return (
    <nav className={`p-4 ${navBarBgColor}`}>
      <div className="container mx-auto flex justify-start items-center">
        <ul className="flex space-x-5">
          <li>
          <a className="whitespace-nowrap text-l font-bold tracking-tighter text-black font-sans"></a>
          </li>
          <NavBarLabel text="{ A Banko }" onSelectTab={onSelectTab} isDarkMode={isDarkMode} selectedTab={selectedTab}/>
          <NavBarLabel text="projects" onSelectTab={onSelectTab} isDarkMode={isDarkMode} selectedTab={selectedTab}/>
          <NavBarLabel text="stack" onSelectTab={onSelectTab} isDarkMode={isDarkMode} selectedTab={selectedTab}/>
          <NavBarLabel text="education" onSelectTab={onSelectTab} isDarkMode={isDarkMode} selectedTab={selectedTab}/>
          <NavBarLabel text="why hire me?" onSelectTab={onSelectTab} isDarkMode={isDarkMode} selectedTab={selectedTab}/>
        </ul>
        <div className="container mx-auto flex justify-end items-center">
          {colorModeBu}
        </div>
      </div>
    </nav>
  );
}

import { IoSunny, IoMoon } from "react-icons/io5";

export default function NabBar({ isDarkMode, toggleIsDark }) {
  let colorModeBu = isDarkMode ? (
    <IoSunny
      color="white"
      className="md:w-6 lg:w-8 xl:w-10 hover:fill-yellow-300"
      onClick={toggleIsDark}
    />
  ) : (
    <IoMoon
      color="black"
      className="md:w-6 lg:w-8 xl:w-10 hover:fill-yellow-300"
      onClick={toggleIsDark}
    />
  );

  let navBarBgColor = isDarkMode ? "bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700" :
  "bg-gradient-to-t from-zinc-300 to-zinc-200";

  let labelClass = "whitespace-nowrap hover:text-blue-500 text-sm md:text-lg"
  labelClass += isDarkMode ? " text-navBarText-dark" : " text-navBarText-light";

  return (
    <nav className= {`p-4 ${navBarBgColor}`}>
      <div className="container mx-auto flex justify-start items-center">
        <ul className="flex space-x-5">
          <li>
            <a
              href="#"
              className={labelClass}>
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className={labelClass}>
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              className={labelClass}>
              Stack
            </a>
          </li>
          <li>
            <a
              href="#"
              className={labelClass}>
              Education
            </a>
          </li>
          <li>
            <a
              href="#"
              className={labelClass}>
              Why hire me?
            </a>
          </li>
        </ul>
        <div className="container mx-auto flex justify-end items-center">
          {colorModeBu}
        </div>
      </div>
    </nav>
  );
}

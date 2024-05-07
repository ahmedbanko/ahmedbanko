export default function NavBarLabel({text, onSelectTab, isDarkMode, selectedTab}) {

    let labelClass = "whitespace-nowrap pb-0.5 hover:text-blue-800 text-sm md:text-md";
    labelClass += isDarkMode ? " text-navBarText-dark" : " text-navBarText-light";
    labelClass += selectedTab === text ? " border-b-2 border-gray-400 border-solid" : "";

    const capitalizedLabel = text.charAt(0).toUpperCase() + text.slice(1);
  return (
    <li>
      <a className={labelClass} onClick={() => onSelectTab(text)}>
        {capitalizedLabel}
      </a>
    </li>
  );
}

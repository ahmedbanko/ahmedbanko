export default function NavBarButton({ text, onSelectTab, selectedTab }) {
  let labelClass =
    "block whitespace-nowrap pb-0.5 hover:text-blue-800 text-md text-navBarText-light dark:text-navBarText-dark";
  labelClass +=
    selectedTab === text ? " underline decoration-2 underline-offset-4" : "";

  const capitalizedLabel = text.charAt(0).toUpperCase() + text.slice(1);

  return (
    <button className={labelClass} onClick={() => onSelectTab(text)}>
      {capitalizedLabel}
    </button>
  );
}

export default function StackItem({ item, ...props }) {
  const { url, imgName, title, subtitle } = item;
  return (
    <div className="flex">
      <a href={url} target="_blank" className="p-2 hover:bg-neutral-400 hover:bg-opacity-80 rounded-md dark:text-white dark:hover:bg-neutral-700 dark:hover:bg-opacity-80">
        <div className="flex justify-between space-x-3 items-center">
          <img className="flex flex-wrap w-12" src={`/logos/${imgName}`} alt={title} />
          <div>
            <p className="text-bodyText-primaryLight dark:text-bodyText-primaryDark">
              {title}
            </p>
            <p className="text-wrap text-bodyText-secondaryLight dark:text-bodyText-secondaryDark">
              {subtitle}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}

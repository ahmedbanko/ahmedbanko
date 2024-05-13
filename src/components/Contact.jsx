import {
  IoMailOutline,
  IoLogoLinkedin,
  IoLogoGithub,
  IoDownload,
} from "react-icons/io5";
import CV from "/CV.pdf";

export default function Contact() {
  const iconClass =
    "cursor-pointer text-bodyText-secondaryLight dark:text-bodyText-secondaryDark";
  return (
    <div className="mb-5">
      <h1 className="text-3xl font-extrabold text-bodyText-primaryLight tracking-tight dark:text-bodyText-primaryDark">
        CONTACT
      </h1>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center">
          <label className="text-center text-bodyText-primaryLight dark:text-bodyText-primaryDark">
            Do you have any questions or would you like to collaborate?
          </label>
          <label className="text-center mb-4 text-bodyText-primaryLight dark:text-bodyText-primaryDark">
            Drop me a line via email or message.
          </label>
          <div className="flex flex-wrap grow items-center gap-4">
            <a href="mailto:contact@ahmedbanko.com">
              <IoMailOutline size={48} className={iconClass} />
            </a>
            <a href="https://www.linkedin.com/in/ahmed-banko" target="_blank">
              <IoLogoLinkedin size={48} className={iconClass} />
            </a>
            <a href="https://github.com/ahmedbanko" target="_blank">
              <IoLogoGithub size={48} className={iconClass} />
            </a>
          </div>
        </div>
        <a
          className="flex min-w-32 max-h-8 min-h-6 text-xs items-center bg-gray-400 text-gray-950 hover:text-navBarText-light rounded-full px-4 py-2 hover:bg-gradient-lightStart dark:bg-gray-800 dark:text-white dark:hover:bg-gray-600"
          href={CV}
          target="_blank"
          download
        >
          <IoDownload className="mr-2 size-4" />
          Download PDF
        </a>
      </div>
    </div>
  );
}

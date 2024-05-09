import { IoMailOutline, IoLogoLinkedin, IoLogoGithub, IoLogoInstagram } from "react-icons/io5";

export default function Contact() {
  return (
    <div className="flex flex-col items-center">
      <label className="text-center mb-4">
        You have a question or want us to work together?
      </label>
      <div className="flex flex-wrap grow items-center gap-4">
        <a href="mailto:contact@ahmedbanko.com">
        <IoMailOutline size={48} className="cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/ahmed-banko" target="_blank">
        <IoLogoLinkedin size={48} className="cursor-pointer" />
        </a>
        <a href="https://github.com/ahmedbanko" target="_blank">
        <IoLogoGithub size={48} className="cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/ahmed.banko/" target="_blank">
        <IoLogoInstagram size={48} className="cursor-pointer" />
        </a>
      </div>
    </div>
  );
}

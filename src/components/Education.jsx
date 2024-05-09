import { EDUCATION } from "../data";
import EducationItem from "./EducationItem";

export default function Education() {
  return (                                                              
    <div className="px-4 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-custom-gradient-dark-via dark:before:via-zinc-400 before:to-transparent">
        {EDUCATION.map((item, index) => (
          <EducationItem key={index} item={item} />
        ))}
      </div>
  );
}

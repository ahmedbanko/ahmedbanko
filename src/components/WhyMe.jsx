import { WHY_ME } from "../data";

export default function WhyMe() {
  return (
    <>
      <ul>
        {WHY_ME.map((reason, index) => (
          <li key={index}>
            <p className="text-bodyText-secondaryLight dark:text-bodyText-secondaryDark text-lg">
              <span>&#8226; </span>
              {reason}
            </p>
          </li>
        ))}
      </ul>

      <p className="text-bodyText-secondaryLight dark:text-bodyText-secondaryDark mt-4 text-lg">
        These points highlight my strong academic background, technical skills,
        project experience, teamwork abilities, and passion for technology,
        making me a valuable asset to any team.
      </p>
    </>
  );
}

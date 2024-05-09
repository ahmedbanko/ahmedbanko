import Typewriter from "./Typewriter";
import { ABOUT_STATEMENT } from "../data.js";

export default function About({loaded}) {
  return (
    <h1>
      {!loaded ? (
        <Typewriter text={ABOUT_STATEMENT} delay={20} />
      ) : (
        <span className="text-bodyText-primaryLight dark:text-bodyText-primaryDark">
          {ABOUT_STATEMENT.split("\n").map((line, index) => (
            <>
              {line}
              {index !== ABOUT_STATEMENT.split("\n").length - 1 && <br />}
            </>
          ))}
        </span>
      )}
    </h1>
  );
}

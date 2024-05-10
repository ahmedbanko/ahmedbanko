import Typewriter from "./Typewriter";
import { ABOUT_STATEMENT } from "../data.js";
import { Fragment } from "react";

export default function About({ loaded }) {
  return (
    <h1>
      {!loaded ? (
        <Typewriter text={ABOUT_STATEMENT} delay={20} />
      ) : (
        <span className="text-bodyText-primaryLight dark:text-bodyText-primaryDark">
          {ABOUT_STATEMENT.split("\n").map((line, index) => (
            <Fragment key={index}>
              {line}
              {index !== ABOUT_STATEMENT.split("\n").length - 1 && <br />}
            </Fragment>
          ))}
        </span>
      )}
    </h1>
  );
}

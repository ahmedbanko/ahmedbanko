import React, { useState, useEffect } from "react";

const Typewriter = ({ text, delay }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  // Splitting text by '\n' and rendering each part in a separate <span>
  const renderedText = currentText.split('\n').map((line, index) => (
    <span key={index}>
      {line}
      {index < currentText.split('\n').length - 1 && <br />} {/* Add <br> between lines */}
    </span>
  ));

  return (
    <span className="text-bodyText-primaryLight dark:text-bodyText-primaryDark">
      {renderedText}
    </span>
  );
};

export default Typewriter;

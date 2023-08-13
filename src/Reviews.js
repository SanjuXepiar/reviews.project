import React, { useState } from "react";
import People from "./People";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
export const Reviews = () => {
  const [index, setIndex] = useState(1);
  const { image, job, name, text } = People[index];
  //   Right & left cursor button
  const countNumber = (number) => {
    if (number > People.length - 1) return (number = 0);
    if (number < 0) return (number = People.length - 1);
    else {
      return number;
    }
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return countNumber(newIndex);
    });
  };

  const prePerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return countNumber(newIndex);
    });
  };

  //   randomPerson    Surprise button.
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * People.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(countNumber(randomNumber));
  };
  return (
    <section>
      <div className="content">
        <img className="img" src={image} alt={name} />
        <h3 className="name">{name}</h3>
        <span className="job">{job}</span>
        <p>{text}</p>
        <div className="button">
          <button onClick={prePerson}>
            <FaAngleLeft />
          </button>
          <button>
            <FaAngleRight onClick={nextPerson} />
          </button>
        </div>
        <button className="random" onClick={randomPerson}>
          Surprise
        </button>
      </div>
    </section>
  );
};

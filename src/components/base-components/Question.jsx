import React from "react";
import styled from "styled-components";

const Question = ({ className, question, selectedAnswer, selectAnswer }) => {
  return (
    <div className={className}>
      <h1 className="question-title">{question.title}</h1>
      <div className="answers-list">
        {question.answers &&
          question.answers.map((answer, index) => (
            <label
              className="answer-radio"
              key={index}
              onClick={() => selectAnswer(index)}
            >
              <input
                type="radio"
                value={index}
                checked={selectedAnswer === index}
              />
              {index} - {answer}
            </label>
          ))}
      </div>
    </div>
  );
};

export default styled(Question)`
  .question-title {
    font-size: 30px;
  }

  .answer-radio {
    display: block;
    width: 100%;
    margin: 5px 0;
    font-size: 21px;
  }
`;

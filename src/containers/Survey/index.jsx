import React, { useState } from "react";
import styled from "styled-components";

import { questions, answers } from "../../config";
import Question from "../../components/base-components/Question";
import Button from "../../components/base-components/Button";
import AnswerPopup from "../../components/base-components/AnswerPopup";

const Survey = ({ className }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(0);

  const nextQuestion = () => {
    console.log("next question", questions, questionIndex);
    if (questionIndex >= questions.length - 1) return;
    setQuestionIndex(questionIndex + 1);
    setSelectedAnswer(0);
  };

  const previousQuestion = () => {
    if (questionIndex === 0) return;
    setQuestionIndex(questionIndex - 1);
    setSelectedAnswer(0);
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handleSubmit = () => {
    setShowAnswer(true);
  };

  return (
    <div className={className}>
      {questions[questionIndex] && (
        <Question
          question={questions[questionIndex]}
          selectedAnswer={selectedAnswer}
          selectAnswer={setSelectedAnswer}
        />
      )}
      <div className="action-container">
        <Button
          className="action-button blue"
          onClick={nextQuestion}
          disabled={questionIndex >= questions.length - 1}
        >
          Next Question
        </Button>
        <Button
          className="action-button blue"
          onClick={previousQuestion}
          disabled={questionIndex === 0}
        >
          Prev Question
        </Button>
        <Button className="action-button blue" onClick={handleShowAnswer}>
          Show Answer
        </Button>
        <Button className="action-button error" onClick={handleSubmit}>
          Submit Answer
        </Button>
      </div>
      <AnswerPopup
        showAnswer={showAnswer}
        closeAnswer={() => setShowAnswer(false)}
        answer={questions[questionIndex]?.answers[answers[questionIndex]]}
      />
    </div>
  );
};

export default styled(Survey)`
  position: relative;
  padding: 10px;

  .action-container {
    margin-top: 32px;
  }

  .action-button {
    margin: 5px;

    &.success {
      color: green;
    }
    &.blue {
      color: blue;
    }
    &.error {
      color: red;
    }
    &:disabled {
      color: gray;
    }
  }
`;

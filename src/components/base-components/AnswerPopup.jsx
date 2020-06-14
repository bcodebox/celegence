import React from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";

const AnswerPopoup = ({ showAnswer, closeAnswer, answer, className }) => (
  <Popup open={showAnswer} onClose={closeAnswer} modal className={className}>
    {close => (
      <div className="modal">
        <div className="header">Answer</div>
        <div className="content">{answer}</div>
      </div>
    )}
  </Popup>
);

export default styled(AnswerPopoup)`
  & .header {
    font-size: 25px;
    border-bottom: 1px solid gray;
  }
`;

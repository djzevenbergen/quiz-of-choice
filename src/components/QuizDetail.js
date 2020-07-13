import React from "react";
import PropTypes from "prop-types";

function QuizDetail(props) {
  const { quiz, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>{quiz.name}</h1>
      <h3> Written by: {quiz.username}</h3>
      <p><em>{quiz.issue}</em></p>
      <ul>
        <li>
          <p>Question 1: {}</p>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

        </li>

      </ul>
      <button onClick={props.onClickingEdit}>Update quiz</button>
      <button onClick={() => onClickingDelete(quiz.id)}>Close quiz</button>
      <hr />
    </React.Fragment>
  );
}

QuizDetail.propTypes = {
  quiz: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default QuizDetail;






quizzes:
{
  quiz1:
  {
    questions:
    {
      question1: "???",
        question2: "333",
          question3: "dkdfk",
            question4: "asldk",
              question5: "hmmm"
    },
    responses:
    {
      user1:
      {
        1: "d",
          2: "a",
            3: "d",
              4: "c",
                5: "b"
      },
      user1:
      {
        1: "d",
          2: "a",
            3: "d",
              4: "c",
                5: "b"
      }
    }

  },
  quiz2:
  {

  },
  quiz3:
  {

  }


}

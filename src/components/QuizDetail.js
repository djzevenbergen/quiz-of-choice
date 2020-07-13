import React from "react";
import PropTypes from "prop-types";

function QuizDetail(props) {
  const { quiz, onClickingDelete } = props;
  console.table(quiz);
  return (
    <React.Fragment>
      <h1>{quiz.name}</h1>
      <h3> Written by: {quiz.username}</h3>
      <form id="quiz">

        <ul>
          <li>
            <p>Question 1: {quiz.q1}</p>
            <ul>
              <li><label>{quiz.q1a}<input id="q1a" type="radio" name="q1" value="a"></input></label></li>
              <li><label>{quiz.q1b}<input id="q1b" type="radio" name="q1" value="b"></input></label></li>
              <li><label>{quiz.q1c}<input id="q1c" type="radio" name="q1" value="c"></input></label></li>
              <li><label>{quiz.q1d}<input id="q1d" type="radio" name="q1" value="d"></input></label></li>

            </ul>
          </li>
          <li>
            <p>Question 2: {quiz.q2}</p>
            <ul>
              <li><label>{quiz.q2a}<input id="q2a" type="radio" name="q2" value="a"></input></label></li>
              <li><label>{quiz.q2b}<input id="q2b" type="radio" name="q2" value="b"></input></label></li>
              <li><label>{quiz.q2c}<input id="q2c" type="radio" name="q2" value="c"></input></label></li>
              <li><label>{quiz.q2d}<input id="q2d" type="radio" name="q2" value="d"></input></label></li>
            </ul>
          </li>
          <li>
            <p>Question 3: {quiz.q3}</p>
            <ul>
              <li><label>{quiz.q3a}<input id="q3a" type="radio" name="q3" value="a"></input></label></li>
              <li><label>{quiz.q3b}<input id="q3b" type="radio" name="q3" value="b"></input></label></li>
              <li><label>{quiz.q3c}<input id="q3c" type="radio" name="q3" value="c"></input></label></li>
              <li><label>{quiz.q3d}<input id="q3d" type="radio" name="q3" value="d"></input></label></li>
            </ul>
          </li>
          <li>
            <p>Question 4: {quiz.q4}</p>
            <ul>
              <li><label>{quiz.q4a}<input id="q4a" type="radio" name="q4" value="a"></input></label></li>
              <li><label>{quiz.q4b}<input id="q4b" type="radio" name="q4" value="b"></input></label></li>
              <li><label>{quiz.q4c}<input id="q4c" type="radio" name="q4" value="c"></input></label></li>
              <li><label>{quiz.q4d}<input id="q4d" type="radio" name="q4" value="d"></input></label></li>
            </ul>
          </li>
          <li>
            <p>Question 5: {quiz.q5}</p>
            <ul>
              <li><label>{quiz.q5a}<input id="q5a" type="radio" name="q5" value="a"></input></label></li>
              <li><label>{quiz.q5b}<input id="q5b" type="radio" name="q5" value="b"></input></label></li>
              <li><label>{quiz.q5c}<input id="q5c" type="radio" name="q5" value="c"></input></label></li>
              <li><label>{quiz.q5d}<input id="q5d" type="radio" name="q5" value="d"></input></label></li>
            </ul>
          </li>

        </ul>
      </form>

      <button onClick={props.onClickingEdit}>Update quiz</button>
      <button onClick={() => onClickingDelete(quiz.id)}>Close quiz</button>
      <hr />

      {/* lack buh tizz quist */}
    </React.Fragment>
  );
}

QuizDetail.propTypes = {
  quiz: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default QuizDetail;






// quizzes:
// {
//   quiz1:
//   {
//     questions:
//     {
//       question1: { question: { "???" }, choices: { 'a', 'b', 'c', 'd' } }
//       question2: "333",
//         question3: "dkdfk",
//           question4: "asldk",
//             question5: "hmmm"
//     },
//     responses:
//     {
//       user1:
//       {
//         1: "d",
//           2: "a",
//             3: "d",
//               4: "c",

//       },
//       user1:
//       {
//         1: "d",
//           2: "a",
//             3: "d",
//               4: "c",

//       }
//     }

//   },
//   quiz2:
//   {

//   },
//   quiz3:
//   {
//   }
// }

import React from "react";
import PropTypes from "prop-types";
import { useFirestore } from "react-redux-firebase";
import { auth } from "firebase";

function SubmitQuiz(props) {
  const { quiz, onClickingDelete } = props;

  const firestore = useFirestore();
  function addAnswersToFirestore(event) {
    event.preventDefault();
    console.log(quiz.names);

    // props.onSubmit();
    const answersToAdd = {
      name: quiz.names,
      author: quiz.username,
      user: props.auth.currentUser.email,
      answer1: event.target.q1.value,
      answer2: event.target.q2.value,
      answer3: event.target.q3.value,
      answer4: event.target.q4.value,
      answer5: event.target.q5.value

    }
    console.table(answersToAdd);

    return firestore.collection('answers').add(answersToAdd);
  }



  if (props.auth.currentUser.email === quiz.userEmail) {
    return (
      <React.Fragment>
        <h1>{quiz.name}</h1>
        <h3> Written by: {quiz.username}</h3>
        <form id="quiz" onSubmit={addAnswersToFirestore}>

          <ul>
            <li>
              <p>Question 1: {quiz.q1}</p>
              <ul>
                <label>{quiz.q1a}<input id="q1a" type="radio" name="q1" value="a"></input></label><br />
                <label>{quiz.q1b}<input id="q1b" type="radio" name="q1" value="b"></input></label><br />
                <label>{quiz.q1c}<input id="q1c" type="radio" name="q1" value="c"></input></label><br />
                <label>{quiz.q1d}<input id="q1d" type="radio" name="q1" value="d"></input></label><br />

              </ul>
            </li>
            <li>
              <p>Question 2: {quiz.q2}</p>
              <ul>
                <label>{quiz.q2a}<input id="q2a" type="radio" name="q2" value="a"></input></label><br />
                <label>{quiz.q2b}<input id="q2b" type="radio" name="q2" value="b"></input></label><br />
                <label>{quiz.q2c}<input id="q2c" type="radio" name="q2" value="c"></input></label><br />
                <label>{quiz.q2d}<input id="q2d" type="radio" name="q2" value="d"></input></label><br />
              </ul>
            </li>
            <li>
              <p>Question 3: {quiz.q3}</p>
              <ul>
                <label>{quiz.q3a}<input id="q3a" type="radio" name="q3" value="a"></input></label><br />
                <label>{quiz.q3b}<input id="q3b" type="radio" name="q3" value="b"></input></label><br />
                <label>{quiz.q3c}<input id="q3c" type="radio" name="q3" value="c"></input></label><br />
                <label>{quiz.q3d}<input id="q3d" type="radio" name="q3" value="d"></input></label><br />
              </ul>
            </li>
            <li>
              <p>Question 4: {quiz.q4}</p>
              <ul>
                <label>{quiz.q4a}<input id="q4a" type="radio" name="q4" value="a"></input></label><br />
                <label>{quiz.q4b}<input id="q4b" type="radio" name="q4" value="b"></input></label><br />
                <label>{quiz.q4c}<input id="q4c" type="radio" name="q4" value="c"></input></label><br />
                <label>{quiz.q4d}<input id="q4d" type="radio" name="q4" value="d"></input></label><br />
              </ul>
            </li>
            <li>
              <p>Question 5: {quiz.q5}</p>
              <ul>
                <label>{quiz.q5a}<input id="q5a" type="radio" name="q5" value="a"></input></label><br />
                <label>{quiz.q5b}<input id="q5b" type="radio" name="q5" value="b"></input></label><br />
                <label>{quiz.q5c}<input id="q5c" type="radio" name="q5" value="c"></input></label><br />
                <label>{quiz.q5d}<input id="q5d" type="radio" name="q5" value="d"></input></label><br />
              </ul>
            </li>
          </ul>

          <button type='submit'>Submit</button>
        </form>
        <button onClick={props.onClickingEdit}>Update quiz</button>
        <button onClick={() => onClickingDelete(quiz.id)}>Close quiz</button>
        <hr />

        {/* lack buh tizz quist */}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h1>{quiz.name}</h1>
        <h3> Written by: {quiz.username}</h3>
        <form id="quiz" onSubmit={addAnswersToFirestore}>

          <ul>
            <li>
              <p>Question 1: {quiz.q1}</p>
              <ul>
                <label>{quiz.q1a}<input id="q1a" type="radio" name="q1" value="a"></input></label><br />
                <label>{quiz.q1b}<input id="q1b" type="radio" name="q1" value="b"></input></label><br />
                <label>{quiz.q1c}<input id="q1c" type="radio" name="q1" value="c"></input></label><br />
                <label>{quiz.q1d}<input id="q1d" type="radio" name="q1" value="d"></input></label><br />

              </ul>
            </li>
            <li>
              <p>Question 2: {quiz.q2}</p>
              <ul>
                <label>{quiz.q2a}<input id="q2a" type="radio" name="q2" value="a"></input></label><br />
                <label>{quiz.q2b}<input id="q2b" type="radio" name="q2" value="b"></input></label><br />
                <label>{quiz.q2c}<input id="q2c" type="radio" name="q2" value="c"></input></label><br />
                <label>{quiz.q2d}<input id="q2d" type="radio" name="q2" value="d"></input></label><br />
              </ul>
            </li>
            <li>
              <p>Question 3: {quiz.q3}</p>
              <ul>
                <label>{quiz.q3a}<input id="q3a" type="radio" name="q3" value="a"></input></label><br />
                <label>{quiz.q3b}<input id="q3b" type="radio" name="q3" value="b"></input></label><br />
                <label>{quiz.q3c}<input id="q3c" type="radio" name="q3" value="c"></input></label><br />
                <label>{quiz.q3d}<input id="q3d" type="radio" name="q3" value="d"></input></label><br />
              </ul>
            </li>
            <li>
              <p>Question 4: {quiz.q4}</p>
              <ul>
                <label>{quiz.q4a}<input id="q4a" type="radio" name="q4" value="a"></input></label><br />
                <label>{quiz.q4b}<input id="q4b" type="radio" name="q4" value="b"></input></label><br />
                <label>{quiz.q4c}<input id="q4c" type="radio" name="q4" value="c"></input></label><br />
                <label>{quiz.q4d}<input id="q4d" type="radio" name="q4" value="d"></input></label><br />
              </ul>
            </li>
            <li>
              <p>Question 5: {quiz.q5}</p>
              <ul>
                <label>{quiz.q5a}<input id="q5a" type="radio" name="q5" value="a"></input></label><br />
                <label>{quiz.q5b}<input id="q5b" type="radio" name="q5" value="b"></input></label><br />
                <label>{quiz.q5c}<input id="q5c" type="radio" name="q5" value="c"></input></label><br />
                <label>{quiz.q5d}<input id="q5d" type="radio" name="q5" value="d"></input></label><br />
              </ul>
            </li>
          </ul>

          <button type='submit'>Submit</button>
        </form>

        {/* lack buh tizz quist */}
      </React.Fragment>
    );
  }
}


SubmitQuiz.propTypes = {
  auth: PropTypes.object,
  quiz: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default SubmitQuiz;

import React from 'react';
import Quiz from './Quiz';
import PropTypes from "prop-types";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase' //, isEmpty



function QuizDashboard(props) {

  useFirestoreConnect([
    { collection: 'quizzes' }
  ]);

  const Quizzes = useSelector(state => state.firestore.ordered.quizzes);


  if (isLoaded(Quizzes)) {
    console.log(typeof (Quizzes));
    return (
      <React.Fragment>
        {/* {Quizzes.map((quiz) => { */}
        {Object.values(Quizzes).filter((quiz) => {
          console.table(quiz);
          if (quiz.userEmail && quiz.userEmail == props.auth.currentUser.email) {
            console.table("quite right" + quiz);
            return <Quiz
              whenQuizClicked={props.onQuizSelection}
              name={quiz.name}
              username={quiz.username}
              q1={quiz.q1}
              q1a={quiz.q1a}
              q2={quiz.q2}
              q3={quiz.q3}
              q4={quiz.q4}
              q5={quiz.q5}
              id={quiz.id}
              key={quiz.id} />
          }
        })
        }


      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }

}

QuizDashboard.propTypes = {
  // QuizList: PropTypes.object,
  onQuizSelection: PropTypes.func,
  auth: PropTypes.object
};

export default QuizDashboard;
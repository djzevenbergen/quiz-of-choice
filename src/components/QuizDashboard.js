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
    console.log(Quizzes);

    const filteredQuizzes = Object.values(Quizzes).filter((quiz) => {
      if (quiz.userEmail == props.auth.currentUser.email) {
        console.log(quiz);
        return quiz;
      }
    })
    console.log(filteredQuizzes);
    return (
      <React.Fragment>

        {filteredQuizzes.map((quiz) => {
          console.log(quiz.name);
          return <Quiz
            whenQuizClicked={props.onQuizSelection}
            name={quiz.name}
            username={quiz.username}
            // q1={quiz.q1}
            // q2={quiz.q2}
            // q3={quiz.q3}
            // q4={quiz.q4}
            // q5={quiz.q5}
            id={quiz.id}
            key={quiz.id}
          />
        }
        )
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
import React from 'react';
import Quiz from './Quiz';
import PropTypes from "prop-types";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'



function QuizList(props) {

  useFirestoreConnect([
    { collection: 'quizzes' }
  ]);

  const Quizs = useSelector(state => state.firestore.ordered.quizzes);


  if (isLoaded(quizzes)) {
    return (
      <React.Fragment>

        {quizzes.map((quiz) => {
          return <Quiz
            whenQuizClicked={props.onQuizSelection}
            names={quiz.names}
            location={quiz.location}
            issue={quiz.issue}
            formattedWaitTime={quiz.formattedWaitTime}
            id={quiz.id}
            key={quiz.id} />
        })}
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

QuizList.propTypes = {
  // QuizList: PropTypes.object,
  onQuizSelection: PropTypes.func
};

export default QuizList;
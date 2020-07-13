import React from 'react';
import NewQuizForm from './NewQuizForm';
import QuizList from './QuizList';
import QuizDetail from './QuizDetail';
import EditQuizForm from './EditQuizForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';
import { withFirestore } from 'react-redux-firebase'

class QuizControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedQuiz: null,
      editing: false
    };
  }

  handleEditingQuizInList = () => {
    this.setState({
      editing: false,
      selectedQuiz: null
    });
  }

  /* componentDidMount() {
     this.waitTimeUpdateTimer = setInterval(() =>
       this.updateQuizElapsedWaitTime(),
       60000
     );
   }
 
   componentWillUnmount() {
     clearInterval(this.waitTimeUpdateTimer);
   }
 
   updateQuizElapsedWaitTime = () => {
     const { dispatch } = this.props;
     Object.values(this.props.masterQuizList).forEach(quiz => {
       const newFormattedWaitTime = quiz.timeOpen.fromNow(true);
       const action = a.updateTime(quiz.id, newFormattedWaitTime);
       dispatch(action);
     });
}*/

  handleClick = () => {
    if (this.state.selectedQuiz != null) {
      this.setState({
        selectedQuiz: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewQuizToList = () => {
    const { dispatch } = this.props;
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedQuiz = (id) => {
    this.props.firestore.get({ collection: 'quizzes', doc: id }).then((quiz) => {
      const firestoreQuiz = {
        names: quiz.get("name"),
        username: quiz.get("username"),
        q1: quiz.get("q1"),
        q2: quiz.get("q2"),
        q3: quiz.get("q3"),
        q4: quiz.get("q4"),
        q5: quiz.get("q5"),
        id: quiz.id
      }
      this.setState({ selectedQuiz: firestoreQuiz });
    });
  }


  handleEditClick = () => {
    this.setState({ editing: true });
  }


  handleDeletingQuiz = (id) => {
    this.props.firestore.delete({ collection: 'quizzes', doc: id });
    this.setState({ selectedQuiz: null });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditQuizForm quiz={this.state.selectedQuiz} onEditQuiz={this.handleEditingQuizInList} />
      buttonText = "Return to Quiz List";
    } else if (this.state.selectedQuiz != null) {
      currentlyVisibleState =
        <QuizDetail
          quiz={this.state.selectedQuiz}
          onClickingDelete={this.handleDeletingQuiz}
          onClickingEdit={this.handleEditClick} />
      buttonText = "Return to Quiz List";
    } else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = <NewQuizForm onNewQuizCreation={this.handleAddingNewQuizToList} />;
      buttonText = "Return to Quiz List";
    } else {
      currentlyVisibleState = <QuizList quizList={this.props.masterQuizList} onQuizSelection={this.handleChangingSelectedQuiz} />;
      buttonText = "Add Quiz";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

QuizControl.propTypes = {
  masterQuizList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterQuizList: state.masterQuizList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

QuizControl = connect(mapStateToProps)(QuizControl);
export default withFirestore(QuizControl);
export default QuizControl;









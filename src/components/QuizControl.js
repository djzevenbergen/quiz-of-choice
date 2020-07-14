import React from 'react';
import NewQuizForm from './NewQuizForm';
import QuizList from './QuizList';
import SubmitQuiz from './SubmitQuiz';
import QuizDashboard from './QuizDashboard';
import EditQuizForm from './EditQuizForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import { withFirestore, isLoaded } from 'react-redux-firebase';


class QuizControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedQuiz: null,
      editing: false,
      formVisibleOnPage: false,
      dashBoardVisible: false
    };
  }

  handleEditingQuizInList = () => {
    this.setState({
      editing: false,
      selectedQuiz: null
    });
  }


  handleClick = () => {
    if (this.state.selectedQuiz != null) {
      this.setState({
        selectedQuiz: null,
        editing: false
      });
    } else {
      console.log("hi there, i'm form visible:" + this.state.formVisibleOnPage);
      this.setState(prevState => ({ formVisibleOnPage: !prevState.formVisibleOnPage }));
      console.log("hi there, i'm form visible:" + this.state.formVisibleOnPage);
    }
  }

  handleDashboardClick = () => {
    this.setState(prevState => ({ dashBoardVisible: !prevState.dashBoardVisible }))
  }

  handleAddingNewQuizToList = () => {
    this.setState({ formVisibleOnPage: !this.state.formVisibleOnPage });
  }

  handleSubmittingQuiz = () => {
    this.setState({ formVisibleOnPage: !this.state.formVisibleOnPage });
  }

  handleChangingSelectedQuiz = (id) => {
    this.props.firestore.get({ collection: 'quizzes', doc: id }).then((quiz) => {
      const firestoreQuiz = {
        names: quiz.get("name"),
        username: quiz.get("username"),
        userEmail: quiz.get("userEmail"),
        q1: quiz.get("q1"),
        q1a: quiz.get("q1a"),
        q1b: quiz.get("q1b"),
        q1c: quiz.get("q1c"),
        q1d: quiz.get("q1d"),

        q2: quiz.get("q2"),
        q2a: quiz.get("q2a"),
        q2b: quiz.get("q2b"),
        q2c: quiz.get("q2c"),
        q2d: quiz.get("q2d"),

        q3: quiz.get("q3"),
        q3a: quiz.get("q3a"),
        q3b: quiz.get("q3b"),
        q3c: quiz.get("q3c"),
        q3d: quiz.get("q3d"),

        q4: quiz.get("q4"),
        q4a: quiz.get("q4a"),
        q4b: quiz.get("q4b"),
        q4c: quiz.get("q4c"),
        q4d: quiz.get("q4d"),

        q5: quiz.get("q5"),
        q5a: quiz.get("q5a"),
        q5b: quiz.get("q5b"),
        q5c: quiz.get("q5c"),
        q5d: quiz.get("q5d"),
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
    let dashText = null;
    const auth = this.props.firebase.auth();

    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <React.Fragment>
          <h1>You must be signed in to access the queue.</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser != null)) {

      if (this.state.dashBoardVisible) {
        currentlyVisibleState = <QuizDashboard auth={this.props.firebase.auth()} onQuizSelection={this.handleChangingSelectedQuiz} />;
        buttonText = "Back to Quiz List";
        dashText = "Back to text";
      } else if (this.state.editing) {
        currentlyVisibleState = <EditQuizForm quiz={this.state.selectedQuiz} onEditQuiz={this.handleEditingQuizInList} />
        buttonText = "Return to Quiz List";
        dashText = "See Your Dashboard";
      } else if (this.state.selectedQuiz != null) {
        currentlyVisibleState =
          <SubmitQuiz
            auth={this.props.firebase.auth()}
            quiz={this.state.selectedQuiz}
            onQuizSubmission={this.handleSubmittingQuiz}
            onClickingDelete={this.handleDeletingQuiz}
            onClickingEdit={this.handleEditClick} />
        buttonText = "Return to Quiz List";
        dashText = "See Your Dashboard";
      } else if (this.state.formVisibleOnPage) {
        currentlyVisibleState = <NewQuizForm auth={this.props.firebase.auth()} onNewQuizCreation={this.handleAddingNewQuizToList} />;
        buttonText = "Return to Quiz List";
        dashText = "See Your Dashboard";
      } else {
        currentlyVisibleState = <QuizList onQuizSelection={this.handleChangingSelectedQuiz} />;
        buttonText = "Add Quiz";
        dashText = "See Your Dashboard";
      }
      return (
        <React.Fragment>
          {currentlyVisibleState}
          <button onClick={this.handleClick}>{buttonText}</button>
          <button onClick={this.handleDashboardClick}>{dashText}</button>

        </React.Fragment>
      );
    }
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










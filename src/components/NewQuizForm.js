import React from "react";
import PropTypes from 'prop-types';
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase'

function NewQuizForm(props) {

  // We add the useFirestore() hook to make Firestore available to our component. (Make sure it lives *inside* the NewQuizForm component.)
  const firestore = useFirestore();

  // Note that we updated the name of the function for adding a Quiz to addQuizToFirestore. This is a more accurate name for what the function will do now.
  function addQuizToFirestore(event) {
    event.preventDefault();

    // We will still need our onNewQuizCreation() method to toggle between components - but it will no longer take an argument because it no longer handles creating a Quiz.
    props.onNewQuizCreation();

    // Here's how we will actually add a quiz to Firestore.

    return firestore.collection('quizzes').add(
      {
        name: event.target.name.value,
        username: event.target.username.value,
        q1: event.target.q1.value,
        q2: event.target.q2.value,
        q3: event.target.q3.value,
        q4: event.target.q4.value,
        q5: event.target.q5.value,
        timeCreated: firestore.FieldValue.serverTimestamp()
      }
    );
  }

  return (
    <React.Fragment>
      <ReusableForm
        // Don't forget to change the name of the function here as well.
        formSubmissionHandler={addQuizToFirestore}
        buttonText="Help!" />
    </React.Fragment>
  );
}

NewQuizForm.propTypes = {
  onNewQuizCreation: PropTypes.func
};

export default NewQuizForm;